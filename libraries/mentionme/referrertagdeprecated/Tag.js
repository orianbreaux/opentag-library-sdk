//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("mentionme.referrertagdeprecated.Tag", {
    config: {/*DATA*/
	id: 35165,
	name: "Referrer Tag [Deprecated]",
	async: true,
	description: "The implementation can be either as a modal popup or embedded in the page using an iFrame, both of which lead to a popup where the customer can register to become a referrer. If the client requires, they can set the implementation parameter to 'embed', in which case the content is loaded into an iframe within the page. This is inserted within a DIV <div id=\"mmWrapper\"></div> which should be on the page.\n\nAll parameters marked with * are optional (if not used populate with empty hardcoded value, even if default is 'uses universal variable')",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/MentionMe.png",
	locationDetail: "",
	priv: true,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 34182,
		name: "Email",
		description: "The customer's email address e.g. waldosmith@mention-me.com",
		token: "email",
		uv: "universal_variable.user.email"
	},
	{
		id: 34183,
		name: "Order Number",
		description: "The unique order identifier from your system e.g. 752109",
		token: "order_number",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 34184,
		name: "Order Total",
		description: "The total amount of the order e.g. 102",
		token: "order_total",
		uv: "universal_variable.transaction.total"
	},
	{
		id: 34185,
		name: "Order Currency",
		description: "The three character currency code that the order total is in, default is GBP",
		token: "order_currency",
		uv: "universal_variable.transaction.currency"
	},
	{
		id: 34186,
		name: "Situation",
		description: "Where you are including this tag within your site (postpurchase, homepage, dashboard)",
		token: "situation",
		uv: ""
	},
	{
		id: 34187,
		name: "Surname*",
		description: "The name of the customer (leave blank string \"\" if not used)",
		token: "surname",
		uv: "universal_variable.user.name"
	},
	{
		id: 34188,
		name: "First name*",
		description: "The customer's firstname e.g. Waldo (leave blank string \"\" if not used)",
		token: "firstname",
		uv: ""
	},
	{
		id: 34189,
		name: "Customer ID*",
		description: "The unique customer identifier from your system e.g. 374507 (leave blank string \"\" if not used)",
		token: "customer_id",
		uv: "universal_variable.user.user_id"
	},
	{
		id: 34190,
		name: "Custom Field*",
		description: "Any piece of custom data you wish to pass to us (leave blank string \"\" if not used)",
		token: "custom_field",
		uv: ""
	},
	{
		id: 34191,
		name: "Coupon Code*",
		description: "The coupon code used by the customer (leave blank string \"\" if not used)",
		token: "coupon_code",
		uv: "universal_variable.transaction.voucher"
	},
	{
		id: 34192,
		name: "Address Line 1*",
		description: "The customer's address line 1 (leave blank string \"\" if not used)",
		token: "address_line1",
		uv: "universal_variable.transaction.billing.address"
	},
	{
		id: 34193,
		name: "Address Line 2*",
		description: "The customer's address line 2 (leave blank string \"\" if not used)",
		token: "address_line2",
		uv: ""
	},
	{
		id: 34194,
		name: "Address City*",
		description: "The customer's address city (leave blank string \"\" if not used)",
		token: "address_city",
		uv: "universal_variable.transaction.billing.city"
	},
	{
		id: 34195,
		name: "Address County*",
		description: "The customer's address county (leave blank string \"\" if not used)",
		token: "address_county",
		uv: ""
	},
	{
		id: 34196,
		name: "Address Postcode*",
		description: "The customer's address postcode (leave blank string \"\" if not used)",
		token: "address_postcode",
		uv: "universal_variable.transaction.billing.postcode"
	},
	{
		id: 34197,
		name: "Address Country*",
		description: "The customer's address country",
		token: "address_country",
		uv: "universal_variable.transaction.billing.country"
	},
	{
		id: 34201,
		name: "Partner Code",
		description: "The partner id given to you by MentionMe",
		token: "partner_code",
		uv: ""
	},
	{
		id: 34210,
		name: "Script Domain",
		description: "Domain for the script: 'tag-demo.mention-me.com' for testing, 'tag.mention-me.com' for production",
		token: "domain",
		uv: ""
	},
	{
		id: 34211,
		name: "Implementation*",
		description: "Override the way the flow is implemented ('embed' or 'popup'). Leave blank string \"\" if not used",
		token: "implementation",
		uv: ""
	},
	{
		id: 34212,
		name: "Segment*",
		description: "String representing the customer segment ('new' or 'existing'). Used to select by user segment.",
		token: "segment",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

var baseUrl = "https://" + this.getValueForToken("domain") + "/api/v2/referreroffer/" + this.getValueForToken("partner_code") + "?";
var paramArr = [];
var paramObj = {
  email: "" + this.getValueForToken("email") + "",
  order_number: "" + this.getValueForToken("order_number") + "",
  order_date: dateTime(),
  order_total: "" + this.getValueForToken("order_total") + "",
  order_currency: "" + this.getValueForToken("order_currency") + "",
  situation: "" + this.getValueForToken("situation") + ""
};

if ("" + this.getValueForToken("customer_id") + "".length) paramObj["customer_id"] = "" + this.getValueForToken("customer_id") + "";
if ("" + this.getValueForToken("custom_field") + "".length) paramObj["custom_field"] = "" + this.getValueForToken("custom_field") + "";
if ("" + this.getValueForToken("surname") + "".length) paramObj["surname"] = "" + this.getValueForToken("surname") + "";
if ("" + this.getValueForToken("firstname") + "".length) paramObj["firstname"] = "" + this.getValueForToken("firstname") + "";
if ("" + this.getValueForToken("coupon_code") + "".length) paramObj["coupon_code"] = "" + this.getValueForToken("coupon_code") + "";
if ("" + this.getValueForToken("address_line1") + "".length) paramObj["address_line1"] = "" + this.getValueForToken("address_line1") + "";
if ("" + this.getValueForToken("address_line2") + "".length) paramObj["address_line2"] = "" + this.getValueForToken("address_line2") + "";
if ("" + this.getValueForToken("address_city") + "".length) paramObj["address_city"] = "" + this.getValueForToken("address_city") + "";
if ("" + this.getValueForToken("address_postcode") + "".length) paramObj["address_postcode"] = "" + this.getValueForToken("address_postcode") + "";
if ("" + this.getValueForToken("address_country") + "".length) paramObj["address_country"] = "" + this.getValueForToken("address_country") + "";
if ("" + this.getValueForToken("address_county") + "".length) paramObj["address_county"] = "" + this.getValueForToken("address_county") + "";
if ("" + this.getValueForToken("implementation") + "".length) paramObj["implementation"] = "" + this.getValueForToken("implementation") + "";
if ("" + this.getValueForToken("segment") + "".length) paramObj["segment"] = "" + this.getValueForToken("segment") + "";

for (var param in paramObj) {
  var value = paramObj[param];
  paramArr.push(param + "=" + escape(value));
}

var mmScript = document.createElement("script");
mmScript.src = baseUrl + paramArr.join("&");
document.body.appendChild(mmScript);

function dateTime() {
  var date = new Date();
  var day = beginningZero(date.getUTCDay());
  var monthOffset = parseInt(date.getUTCMonth() + 1, 10);
  var month = beginningZero(monthOffset);
  var hours = beginningZero(date.getUTCHours());
  var minutes = beginningZero(date.getUTCMinutes());
  var seconds = beginningZero(date.getUTCSeconds());
  var time = hours + ":" + minutes + ":" + seconds + date.getUTCMilliseconds();
  return date.getUTCFullYear() + "-" + month + "-" + day + "GMT" + time;
}

function beginningZero(digit) {
  return (digit < 10) ? "0" + digit : "" + digit;
}


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});