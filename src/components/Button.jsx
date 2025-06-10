import '../../src/index.css';

function Button({ text , onClick , type="button", className=""})
{
    return(
        <div>
            <button className={`btn-primary ${className}`} onClick={onClick} type={type}>{text || children}</button>
        </div>
    );
}

export default Button;