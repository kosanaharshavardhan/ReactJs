const fakedbfetch=(props)=>{
    return(
        
            <div className={`render ${props.class}`} >
                <div>{`Name:${props.name}` }</div>
                <div>{`Branch:${props.branch}`}</div>
            </div>
        
    )
}

export default fakedbfetch;