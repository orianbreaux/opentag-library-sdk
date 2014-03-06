//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("google.googledynamicremarketingtagbasketpage.Tag", {
	config: {
		/*DATA*/
		name: "Google Dynamic Remarketing Tag - Basket Page",
		async: true,
		description: "",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		priv: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "Product Categories",
			description: "Product Categories",
			token: "product_categories",
			uv: "universal_variable.basket.line_items[#].product.category"
		},
		{
			name: "Page Type",
			description: "Page Type",
			token: "page_category",
			uv: "universal_variable.page.category"
		},
		{
			name: "Product IDs",
			description: "Product IDs",
			token: "product_ids",
			uv: "universal_variable.basket.line_items[#].product.sku_code"
		},
		{
			name: "Product Values",
			description: "Product Values",
			token: "product_values",
			uv: "universal_variable.basket.line_items[#].product.unit_price"
		},
		{
			name: "Google Conversion ID",
			description: "Your Google Conversion ID",
			token: "google_conversion_id",
			uv: ""
		},
		{
			name: "Google Conversion Label",
			description: "Your Google Conversion Label ID",
			token: "google_conversion_label",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

(function (){
   var productIdsArray = [];
   for (var i=0; i<this.getValueForToken("product_ids").length; i++)
   { 
      productIdsArray.push(this.getValueForToken("product_ids")[i]);
   }
   var productCategoriesArray = [];
   for (var i=0; i<this.getValueForToken("product_categories").length; i++)
   { 
      productCategoriesArray.push(this.getValueForToken("product_categories")[i]);
   }
   var productValuesArray = [];
   for (var i=0; i<this.getValueForToken("product_values").length; i++)
   { 
      productValuesArray.push(this.getValueForToken("product_values")[i]);
   }

   window.google_tag_params = {
      ecomm_prodid: productIdsArray,
      ecomm_pagetype: '' + this.getValueForToken("page_category") + '',
      ecomm_pcat: productCategoriesArray,
      ecomm_pvalue: productValuesArray
   };
 
   window.google_conversion_id = this.getValueForToken("google_conversion_id");
   window.google_conversion_label = "" + this.getValueForToken("google_conversion_label") + "";
   window.google_custom_params = window.google_tag_params;
   window.google_remarketing_only = true;

   var script = document.createElement('script');
   script.type = "text/javascript";
   script.src = "//www.googleadservices.com/pagead/conversion.js";
   document.head.appendChild(script);
})();
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});