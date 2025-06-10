import '../../src/index.css';

function Button(props)
{
    return(
        <div>
            <button className="btn-primary" type={props.type || button}>{props.text || props.children}</button>
        </div>
    );
}

export default Button;