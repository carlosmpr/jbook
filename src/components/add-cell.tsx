import "./add-cell.css";
import { useActions } from "../hooks/use-action";

interface AddCellProps {
  nexTCellId: string | null;
  forceVisible?: boolean
}
const AddCell: React.FC<AddCellProps> = ({ nexTCellId, forceVisible }) => {
  const { inSertCellAfter } = useActions();
  return (
    <div className={`add-cell ${forceVisible && 'force-visible'}`}>
      <div className="add-buttons">
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => inSertCellAfter(nexTCellId, "code")}
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
          <span>Code</span>
        </button>
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => inSertCellAfter(nexTCellId, "text")}
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
          <span>Text</span>
        </button>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default AddCell;
