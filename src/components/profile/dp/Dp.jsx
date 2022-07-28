import "./dp.css"

export const Dp = (props) => {
    return(
        <img
            src={props.src || "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"}
            className={"rounded-full "+(props.className || "w-10 h-10")}
            alt={props.children || "Avatar"}
        />
    )
}