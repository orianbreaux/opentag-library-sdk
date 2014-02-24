//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("bazaarvoice.socialmeasurementconversionbeaconrequiredfieldsonly.Tag", {
    config: {/*DATA*/
	id: 39157,
	name: "Social Measurement Conversion Beacon (Required fields only)",
	async: true,
	description: "To be placed on the conversion page in order to integrate Social Measurement with Bazaarvoice's other solutions.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/bazaarvoice.jpg",
	locationDetail: "",
	priv: false,
	url: "static.powerreviews.com/t/v1/tracker.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 38157,
		name: "Bazaarvoice Merchant Group ID",
		description: "Should match Merchant Group ID from PowerReviews  Dashboard’s Configure Reviews section",
		token: "group_id",
		uv: ""
	},
	{
		id: 38158,
		name: "Bazaarvoice Merchant ID",
		description: "Should match Merchant ID from PowerReviews  Dashboard’s Configure Reviews section",
		token: "merchant_id",
		uv: ""
	},
	{
		id: 38159,
		name: "Bazaarvoice User ID",
		description: "Unique identifier for the customer writing the review or question/answer.",
		token: "merchant_user_id",
		uv: "universal_variable.user.user_id"
	},
	{
		id: 38160,
		name: "Bazaarvoice Order ID",
		description: "Unique order identifier; at least one character.",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 38161,
		name: "Bazaarvoice Order Subtotal",
		description: "Order subtotal (excluding tax, shipping and handling, and discounts).",
		token: "order_subtotal",
		uv: "universal_variable.transaction.subtotal"
	},
	{
		id: 38162,
		name: "Bazaarvoice Item ID list",
		description: "An array of all unique item IDs in the order.",
		token: "ids",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 38163,
		name: "Bazaarvoice Item Quantity List",
		description: "An array of quantities associated with all unique item IDs in the order.",
		token: "qtys",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 38164,
		name: "Bazaarvoice Item Sale Price list",
		description: "An array of sale prices for all unique item IDs in the order.",
		token: "prices",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
(function(){try{
var item_count = 0;
var items = (function(){
  var tmp = [];
  for (var i = 0; i < this.getValueForToken("ids").length; i ++){
    tmp.push([this.getValueForToken("ids")[i], "", "", this.getValueForToken("qtys")[i], this.getValueForToken("prices")[i]])
    item_count += this.getValueForToken("qtys")[i];
  }
  return tmp;
})();
var tracker = POWERREVIEWS.tracker.createTracker({
merchantGroupId: "" + this.getValueForToken("group_id") + ""});
tracker.trackPageview("c", {
merchantId: "" + this.getValueForToken("merchant_id") + "",
locale: "en_US",
merchantUserId: "" + this.getValueForToken("merchant_user_id") + "",
orderId: "" + this.getValueForToken("order_id") + "",
orderSubtotal: "" + this.getValueForToken("order_subtotal") + "",
orderNumberOfItems: String(item_count),
orderItems: items
});
}catch(e){window.console && window.console.log(e)}}());
    }/*~POST*/
});