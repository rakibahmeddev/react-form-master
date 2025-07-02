import { useState } from "react"

const useInputState = (defaultValue = '') => {
    const [value, setValue] = useState(defaultValue)

    // const handleChange = e => {
    //     console.log(e.target.value)
    //     setValue(e.target.value)
    // }

    // return [value, handleChange]

    const onChange = e => {
        setValue(e.target.value);
        console.log(e.target.value)
    }

    return {
        value,
        onChange
    }


}

export default useInputState