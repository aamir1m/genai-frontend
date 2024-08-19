function Message() {
    const name = 'aamir'
    if (name)
        return <h1>Hello {name}</h1>;
    return (
    <div className="bg-green-200 p-4 rounded-lg shadow-md"><h1>Hello World</h1></div>
    )
}

export default Message;