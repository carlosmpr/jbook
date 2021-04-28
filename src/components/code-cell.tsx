import { useEffect } from "react";
import './code-cell.css'
import CodeEditor from "./code-editor";
import Preview from "./preview";
import Resizable from "./resizable";
import { Cell } from "../state";
import { useActions } from "../hooks/use-action";
import { useTypedSelector } from "../hooks/usetyped-slector";
import { useCumulativeCode } from "../hooks/use-cumulative-code";

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundles[cell.id]);
  const cumulativeCode = useCumulativeCode(cell.id)


  useEffect(() => {
    if(!bundle){
      createBundle(cell.id, cumulativeCode);
      return;
    }
    const timer = setTimeout(async () => {
      createBundle(cell.id, cumulativeCode);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disbale-next-line react-hooks/exhaustive-deps
  }, [cumulativeCode, cell.id]);
  return (
    <Resizable direction={"vertical"}>
      <div style={{ height: "100%", display: "flex", flexDirection: "row" }}>
        <Resizable direction={"horizontal"}>
          <CodeEditor
            initialValue={cell.content}
            onChange={(value) => updateCell(cell.id, value)}
          />
        </Resizable>
        {
          !bundle || bundle.loading ? <div className="progress-cover"> <progress className="progress is-small is-primary" max="100">Loading</progress></div> : <Preview code={bundle.code} err={bundle.err} />
        }
     
      </div>
    </Resizable>
  );
};

export default CodeCell;
