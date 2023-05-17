
const CommonHeader = (props) => {
  return (
      <div className="text-center">
          <h2 className={`fs-44 fw-bold ${props.textClr}`}> {props.title}</h2>
          <p className={`fs-6 ff-poppins ${props.textClr} `} dangerouslySetInnerHTML={{ __html: props?.pra }}></p>
      </div>
  );
}

export default CommonHeader