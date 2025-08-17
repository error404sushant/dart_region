import *  as IConfig from "./IConfiguration";

export let defaultOptionsConfiguration: IConfig.IOptionsConfiguration = {
  collapseDefaultRegionsOnOpen: true,
  showRegionsInOutline: false
};

export let defaultConfiguration: IConfig.IConfiguration = {
  "[dart]": {
    foldEnd: "//endregion",
    foldEndRegex: "//[\\s]*endregion",
    foldStart: "//region [NAME]",
    foldStartRegex: "//[\\s]*region[\\s]*(.*)"
  },

};
