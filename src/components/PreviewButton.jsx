import showView from "../assets/view.svg";
import hideView from "../assets/hide.svg";
import { useSelector, useDispatch } from "react-redux";
import { togglePreview } from "../features/preview";

export default function PreviewButton() {
  const previewData = useSelector((state) => state.preview);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(togglePreview())}
      className=" py-2 px-4 rounded border border-slate-200 flex mx-auto items-center text-left text-slate-50"
    >
      <img
        className="w-5 mr-3 "
        src={previewData.preview ? hideView : showView}
        alt="button hide or view"
      />
      <span> {previewData.preview ? "Hide" : "Show"} Preview</span>
    </button>
  );
}
