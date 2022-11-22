/**
 * Recursively calls itself to get the nested param ids.
 *
 * @param {Object} checkbox Checkbox.
 * @param {Array} allParamIds Used to build the ids array, by constantly pushing an id into it.
 *
 * @return {Array} allParamIds All param ids.
 */
const getAllParamIds = ( checkbox = {}, allParamIds = [] ) => {
	// Push the checkbox value(id) in allParamIds.
	allParamIds.push( checkbox.value );

	/**
	 * If child checkboxes exist, loop through each one of them,
	 * and recursively call getAllParamIds() to push ids from children.
	 */
	const childCheckboxes = checkbox?.children ?? {};
	if ( Object.keys( childCheckboxes ).length ) {
		Object.keys( childCheckboxes ).forEach( ( key ) => {
			getAllParamIds( childCheckboxes[ key ], allParamIds );
		} );
	}

	return allParamIds;
};

