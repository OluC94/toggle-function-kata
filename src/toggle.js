const toggle = (targetId, array) => {
    const results = array.map(item => {
        if (item.id === targetId){
            return {...item, isOn: !item.isOn}
        }
        return item
    })
    return results
}

export {toggle}