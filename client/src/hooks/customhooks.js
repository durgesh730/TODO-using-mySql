import axios from "axios";
import { useEffect, useState } from "react";

export const useAddTasks = () => {
    const [inVal, setInpval] = useState({
        title: '',
        description: "",
        completed: false
    })
    const [loading, setLoading] = useState(true)

    const handleform =(e) => {
        e.preventDefault()
        axios.post(`http://localhost:5000/add/note`, inVal)
            .then((res) => {
                if (res.data.success) {
                    setInpval({
                        ...inVal,
                        task: '',
                        duedate: ""
                    })
                    window.location.reload()
                }
            }).finally(() => {
                setLoading(false)
            })

    }

    return { handleform, inVal, setInpval, loading }
}

export const useFetachAllTasks = () => {
    const [task, setTask] = useState([])
    const [loading, setLoading] = useState(true)
    const [refetch, setRefetch] = useState(1);

    const refresh = () => {
        setRefetch((prev) => prev + 1);
    }

    const GetAlltask = () => {
        axios.get(`http://localhost:5000/get/notes`)
            .then((res) => {
                setTask(res.data.notes)
            })
            .catch((err) => {
                console.log(err)
            }).finally(() => {
                setLoading(false)
            })
    }


    useEffect(() => {
        GetAlltask()
    }, [refetch])

    return { task, loading, refresh }
}

export const useEditTask = (input) => {
    const [loading, setLoading] = useState(true)

    const handleSumNote = () => {
        axios.put(`http://localhost:5000/edit/note/${input.id}`, input)
            .then((res) => {
                // setTask(res.data.notes)
            })
            .catch((err) => {
                console.log(err)
            }).finally(() => {
                setLoading(false)
            })
    }

    return { handleSumNote, loading}
}

export const useDeleteTask = () => {
    const [loading, setLoading] = useState(true)

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/delete/note/${id}`)
            .then((res) => {
                if (res.data.success) {
                    window.location.reload()
                }
            })
            .catch((err) => {
                console.log(err)
            }).finally(() => {
                setLoading(false)
            })
    }


    return { handleDelete, loading }
}