//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("google.googleretargetingconversionasyncwithcustomparameters.Tag", {
    config: {/*DATA*/
	id: 33170,
	name: "Google Retargeting Conversion Async with custom parameters",
	async: true,
	description: "Conversion tracking is a tool to help you measure conversions, and ultimately help you identify how effective your Ad Exchange ads are for you.",
	html: "\n",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Google.jpeg",
	locationDetail: "",
	priv: false,
	url: "www.googleadservices.com/pagead/conversion_async.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 32210,
		name: "Conversion ID",
		description: "",
		token: "conversion_id",
		uv: ""
	},
	{
		id: 32211,
		name: "Conversion Label",
		description: "",
		token: "conversion_label",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
	window.google_trackConversion({
	  google_conversion_id: this.getValueForToken("conversion_id"),
	  google_conversion_label: "" + this.getValueForToken("conversion_label") + "",
	  google_custom_params: window.google_tag_params || {},
	  google_remarketing_only: true
	});
    }/*~POST*/
});