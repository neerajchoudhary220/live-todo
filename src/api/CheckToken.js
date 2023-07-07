import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const CheckToken = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/auth')
        }
    }, [])

}

export { CheckToken }