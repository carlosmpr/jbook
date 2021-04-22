import "./resizable.css";
import { ResizableBox, ResizableBoxProps } from "react-resizable";

interface ResizableProps {
  direction: "horizontal" | "vertical";
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  let resizableProps:ResizableBoxProps;
  if(direction === 'horizontal'){
    resizableProps ={
      maxConstraints:[window.innerWidth * 0.75, Infinity],
      height:Infinity,
      width: window.innerWidth,
      resizeHandles:["e"],
      minConstraints:[window.innerWidth * 0.2, Infinity],
      className:'resize-horizontal'

    }

  }else{
    resizableProps ={

      maxConstraints:[Infinity, window.innerHeight * 0.9],
      height:300,
      width:Infinity,
      resizeHandles:["s"],
      minConstraints:[Infinity, 25],

    }

  }
  
  return (
    <ResizableBox
     {...resizableProps}
    >
      {children}
    </ResizableBox>
  );
};

export default Resizable;
