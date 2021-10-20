import moment from "moment";

export const timeConverter = (timestamp) => {
	return moment(timestamp).format("lll");
};