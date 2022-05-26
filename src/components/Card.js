export default function Card(props){
    return(
        <div style = {{margin: '1em auto'}}>
            <div class="container">
                <div class="progress-bar"></div>
            </div>
      <span>🔥</span><br/>
            {props.title}
            <br/>
            <br/>
            <hr/>
        </div>
    )
}