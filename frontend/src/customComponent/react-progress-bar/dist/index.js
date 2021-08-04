Object.defineProperty(exports, "__esModule", { value: true });

var React = require("react");
var PropTypes = require("prop-types");

var ProgressBar = function (_a) {
  var bgColor = _a.bgColor,
    completed = _a.completed,
    inProgress = _a.inProgress,
    baseBgColor = _a.baseBgColor,
    height = _a.height,
    width = _a.width,
    margin = _a.margin,
    padding = _a.padding,
    borderRadius = _a.borderRadius,
    labelAlignment = _a.labelAlignment,
    labelColor = _a.labelColor,
    labelSize = _a.labelSize,
    isLabelVisible = _a.isLabelVisible,
    transitionDuration = _a.transitionDuration,
    transitionTimingFunction = _a.transitionTimingFunction,
    className = _a.className,
    dir = _a.dir,
    ariaValuemin = _a.ariaValuemin,
    ariaValuemax = _a.ariaValuemax,
    ariaValuetext = _a.ariaValuetext;
  var getAlignment = function (alignmentOption) {
    if (alignmentOption === "left") {
      return "flex-start";
    } else if (alignmentOption === "center") {
      return "center";
    } else if (alignmentOption === "right") {
      return "flex-end";
    } else {
      return null;
    }
  };
  var alignment = getAlignment(labelAlignment);
  var containerStyles = {
    height: height,
    backgroundColor: baseBgColor,
    borderRadius: borderRadius,
    padding: padding,
    width: width,
    margin: margin,
  };
  var fillerStyles = {
    height: height,
    width: Number(completed) > 100 ? "100%" : Number(completed) + "%",
    backgroundColor: bgColor,
    transition:
      "width " +
      (transitionDuration || "1s") +
      " " +
      (transitionTimingFunction || "ease-in-out"),
    borderRadius: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent:
      labelAlignment !== "outside" && alignment ? alignment : "normal",
  };
  var labelStyles = {
    padding: labelAlignment === "outside" ? "0 0 0 0px" : "5px",
    color: labelColor,
    fontWeight: "bold",
    fontSize: labelSize,
    display: !isLabelVisible ? "none" : "initial",
  };
  var outsideStyles = {
    display: labelAlignment === "outside" ? "flex" : "initial",
    alignItems: labelAlignment === "outside" ? "center" : "initial",
  };
  // var completedStr = typeof completed === "number" ? completed + "123" : "" + completed;
  var completedStr = completed > 1 ? inProgress : "";
  return React.createElement(
    "div",
    {
      style: outsideStyles,
      className: className,
      dir: dir,
      role: "progressbar",
      "aria-valuenow": completedStr,
      "aria-valuemin": ariaValuemin,
      "aria-valuemax": ariaValuemax,
      "aria-valuetext":
        "" + (ariaValuetext === null ? completedStr : ariaValuetext),
    },
    React.createElement(
      "div",
      { style: containerStyles },
      React.createElement(
        "div",
        { style: fillerStyles },
        labelAlignment !== "outside" &&
          React.createElement("span", { style: labelStyles }, completedStr)
      )
    ),
    labelAlignment === "outside" &&
      React.createElement("span", { style: labelStyles }, completedStr)
  );
};
ProgressBar.propTypes = {
  completed: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  inProgress: PropTypes.string,
  bgColor: PropTypes.string,
  baseBgColor: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  borderRadius: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  labelAlignment: PropTypes.oneOf(["left", "center", "right", "outside"]),
  labelColor: PropTypes.string,
  labelSize: PropTypes.string,
  isLabelVisible: PropTypes.bool,
  className: PropTypes.string,
  dir: PropTypes.oneOf(["rtl", "ltr", "auto"]),
};
ProgressBar.defaultProps = {
  bgColor: "#6a1b9a",
  height: "20px",
  width: "100%",
  borderRadius: "50px",
  labelAlignment: "right",
  baseBgColor: "#e0e0de",
  labelColor: "#fff",
  labelSize: "15px",
  isLabelVisible: true,
  dir: "ltr",
  ariaValuemin: 0,
  ariaValuemax: 100,
  ariaValuetext: null,
};

exports.default = ProgressBar;
//# sourceMappingURL=index.js.map
