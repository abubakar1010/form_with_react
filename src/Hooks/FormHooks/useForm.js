import { useState } from "react"

const useForm = (defaultValue = null ) => {

    const [value, setValue ] = useState(defaultValue)

    const handleForm = (e) => {setValue(e.target.value)
}
    return [value, handleForm]
}

export default useForm