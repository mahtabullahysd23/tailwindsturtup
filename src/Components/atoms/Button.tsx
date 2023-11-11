type Props = {
  text: string;
  outline?: boolean;
  onClick: () => void;
};

const Button = (props: Props) => {
  return (

    props.outline ? (
        <button
      className="bg-white hover:bg-purple-dark hover:text-white text-purple-dark border-purple-dark py-2 px-4 rounded-xl w-full"
      onClick={props.onClick}
    >
      {props.text}
    </button>
    
  ) : (

    <button
      className="bg-purple-dark hover:bg-purple-light text-white py-2 px-4 rounded-xl w-full"
      onClick={props.onClick}
    >
      {props.text}
    </button>
    
  )
  )
};

export default Button;
