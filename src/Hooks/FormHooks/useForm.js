import { useState } from "react"

const useForm = (defaultValue = null ) => {

    const [value, setValue ] = useState(defaultValue)

    const handleForm = val => setValue(val)

    return [value, handleForm]
}

export default useForm