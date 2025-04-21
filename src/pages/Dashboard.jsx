import { useEffect, useState } from 'react'
import { supabase } from '../supabase'

export default function Dashboard() {
  const [checkins, setCheckins] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        window.location.href = '/admin/login'
        return
      }

      const { data, error } = await supabase.from('checkins').select('*').order('created_at', { ascending: false })
      if (error) {
        alert('Failed to load check-ins')
        console.error(error)
      } else {
        setCheckins(data)
      }

      setLoading(false)
    }

    fetchData()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/admin/login'
  }

  return (
    <div style={{ maxWidth: 900, margin: 'auto', paddingTop: '4%' }}>
      <h2>RepairFlow Admin Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      {loading ? <p>Loading...</p> : (
        <table border="1" cellPadding="6" style={{ marginTop: 20, width: '100%' }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Device</th>
              <th>Repair</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {checkins.map(item => (
              <tr key={item.id}>
                <td>{new Date(item.created_at).toLocaleString()}</td>
                <td>{item.customer_name}</td>
                <td>{item.device_model}</td>
                <td>{item.repair_type}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}