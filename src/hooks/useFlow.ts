import { useContext } from "react";
import { FlowContext } from "../FlowContext";

export function useFlowContext() {
  const context = useContext(FlowContext);
  if (context === undefined) {
    throw new Error("useFlow must be used within a FlowProvider");
  }
  return context;
}
