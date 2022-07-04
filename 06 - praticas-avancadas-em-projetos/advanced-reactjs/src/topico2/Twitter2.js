import React, {useEffect, useState, memo} from "react";

const areEqual = (prevProps, nextProps) => {
    return prevProps.loading === nextProps.loading
}


function Twitter2(props)  {

    const {loading} = props
    const [tweet, setTweet] = useState('title')
    
    
    //componentDidMount
    useEffect(() => {
        const {posts, loading} = props
        console.log('componentDidMount' , posts)
        console.log('componentDidMount:loading' , loading)
    },) 

    //componentDidUpdate
    useEffect(() => {
        console.log('componentDidUpdate', loading)
    }, [loading])

    //componentWillUnmount
    useEffect(() => {
        return () => {
            console.log('componentWillUmount: fui removido :(') 
        }
        
    })

    const handleTweet = () => {
        setTweet('Tweet atualizado')
     }

    console.log('Tweet atualizado' , tweet)

    return(
        <div>
           <button onClick={handleTweet}> Re render</button>
            teste
        </div>
    )
    


}


export default memo(Twitter2,areEqual)