import '../../src/index.css';

function Button(props)
{
    return(
        <div>
            <button className="btn-primary" type="button">{props.text}</button>
        </div>
    );
}

export default Button;