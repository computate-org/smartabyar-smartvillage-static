
// Search //

async function searchParkingAccess($formFilters, success, error) {
  var filters = searchParkingAccessFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, textStatus, errorThrown ) {};

  searchParkingAccessVals(filters, success, error);
}

function searchParkingAccessFilters($formFilters) {
  var filters = [];
  if($formFilters) {

    var filterCreated = $formFilters.find('.valueCreated').val();
    if(filterCreated != null && filterCreated !== '')
      filters.push({ name: 'fq', value: 'created:' + filterCreated });

    var filterModified = $formFilters.find('.valueModified').val();
    if(filterModified != null && filterModified !== '')
      filters.push({ name: 'fq', value: 'modified:' + filterModified });

    var filterObjectId = $formFilters.find('.valueObjectId').val();
    if(filterObjectId != null && filterObjectId !== '')
      filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

    var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
    var $filterArchivedSelect = $formFilters.find('select.valueArchived');
    var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
    var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
    var filterArchived = null;
    if(filterArchivedSelectVal !== '')
      filterArchived = filterArchivedSelectVal == 'true';
    if(filterArchived != null && filterArchived === true)
      filters.push({ name: 'fq', value: 'archived:' + filterArchived });

    var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
    var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
    var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
    var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
    var filterDeleted = null;
    if(filterDeletedSelectVal !== '')
      filterDeleted = filterDeletedSelectVal == 'true';
    if(filterDeleted != null && filterDeleted === true)
      filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

    var filterAddress = $formFilters.find('.valueAddress').val();
    if(filterAddress != null && filterAddress !== '')
      filters.push({ name: 'fq', value: 'address:' + filterAddress });

    var filterAlternateName = $formFilters.find('.valueAlternateName').val();
    if(filterAlternateName != null && filterAlternateName !== '')
      filters.push({ name: 'fq', value: 'alternateName:' + filterAlternateName });

    var filterAreaServed = $formFilters.find('.valueAreaServed').val();
    if(filterAreaServed != null && filterAreaServed !== '')
      filters.push({ name: 'fq', value: 'areaServed:' + filterAreaServed });

    var filterCategory = $formFilters.find('.valueCategory').val();
    if(filterCategory != null && filterCategory !== '')
      filters.push({ name: 'fq', value: 'category:' + filterCategory });

    var filterDataProvider = $formFilters.find('.valueDataProvider').val();
    if(filterDataProvider != null && filterDataProvider !== '')
      filters.push({ name: 'fq', value: 'dataProvider:' + filterDataProvider });

    var filterDateCreated = $formFilters.find('.valueDateCreated').val();
    if(filterDateCreated != null && filterDateCreated !== '')
      filters.push({ name: 'fq', value: 'dateCreated:' + filterDateCreated });

    var filterDateModified = $formFilters.find('.valueDateModified').val();
    if(filterDateModified != null && filterDateModified !== '')
      filters.push({ name: 'fq', value: 'dateModified:' + filterDateModified });

    var filterDescription = $formFilters.find('.valueDescription').val();
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var filterFeatures = $formFilters.find('.valueFeatures').val();
    if(filterFeatures != null && filterFeatures !== '')
      filters.push({ name: 'fq', value: 'features:' + filterFeatures });

    var filterHeight = $formFilters.find('.valueHeight').val();
    if(filterHeight != null && filterHeight !== '')
      filters.push({ name: 'fq', value: 'height:' + filterHeight });

    var filterLocation = $formFilters.find('.valueLocation').val();
    if(filterLocation != null && filterLocation !== '')
      filters.push({ name: 'fq', value: 'location:' + filterLocation });

    var filterName = $formFilters.find('.valueName').val();
    if(filterName != null && filterName !== '')
      filters.push({ name: 'fq', value: 'name:' + filterName });

    var filterOwner = $formFilters.find('.valueOwner').val();
    if(filterOwner != null && filterOwner !== '')
      filters.push({ name: 'fq', value: 'owner:' + filterOwner });

    var filterRefOffStreetParking = $formFilters.find('.valueRefOffStreetParking').val();
    if(filterRefOffStreetParking != null && filterRefOffStreetParking !== '')
      filters.push({ name: 'fq', value: 'refOffStreetParking:' + filterRefOffStreetParking });

    var filterSeeAlso = $formFilters.find('.valueSeeAlso').val();
    if(filterSeeAlso != null && filterSeeAlso !== '')
      filters.push({ name: 'fq', value: 'seeAlso:' + filterSeeAlso });

    var filterSlope = $formFilters.find('.valueSlope').val();
    if(filterSlope != null && filterSlope !== '')
      filters.push({ name: 'fq', value: 'slope:' + filterSlope });

    var filterSource = $formFilters.find('.valueSource').val();
    if(filterSource != null && filterSource !== '')
      filters.push({ name: 'fq', value: 'source:' + filterSource });

    var filterWidth = $formFilters.find('.valueWidth').val();
    if(filterWidth != null && filterWidth !== '')
      filters.push({ name: 'fq', value: 'width:' + filterWidth });

    var filterPk = $formFilters.find('.valuePk').val();
    if(filterPk != null && filterPk !== '')
      filters.push({ name: 'fq', value: 'pk:' + filterPk });

    var filterInheritPk = $formFilters.find('.valueInheritPk').val();
    if(filterInheritPk != null && filterInheritPk !== '')
      filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

    var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
    if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
      filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

    var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
    if(filterClassSimpleName != null && filterClassSimpleName !== '')
      filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

    var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
    if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
      filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

    var filterSessionId = $formFilters.find('.valueSessionId').val();
    if(filterSessionId != null && filterSessionId !== '')
      filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

    var filterUserKey = $formFilters.find('.valueUserKey').val();
    if(filterUserKey != null && filterUserKey !== '')
      filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

    var filterSaves = $formFilters.find('.valueSaves').val();
    if(filterSaves != null && filterSaves !== '')
      filters.push({ name: 'fq', value: 'saves:' + filterSaves });

    var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
    if(filterObjectTitle != null && filterObjectTitle !== '')
      filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

    var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
    if(filterPageUrlPk != null && filterPageUrlPk !== '')
      filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

    var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
    if(filterPageUrlApi != null && filterPageUrlApi !== '')
      filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

    var filterId = $formFilters.find('.valueId').val();
    if(filterId != null && filterId !== '')
      filters.push({ name: 'fq', value: 'id:' + filterId });

    var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.find('.valueObjectText').val();
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
    if(filterPageUrlId != null && filterPageUrlId !== '')
      filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });
  }
  return filters;
}

function searchParkingAccessVals(filters, success, error) {


  $.ajax({
    url: '/api/parking-access?' + $.param(filters)
    , dataType: 'json'
    , type: 'GET'
    , contentType: 'application/json; charset=utf-8'
    , success: success
    , error: error
  });
}

function suggestParkingAccessObjectSuggest($formFilters, $list) {
  success = function( data, textStatus, jQxhr ) {
    $list.empty();
    $.each(data['list'], function(i, o) {
      var $i = $('<i>').attr('class', 'fad fa-map-location-dot ');
      var $span = $('<span>').attr('class', '').text(o['objectTitle']);
      var $li = $('<li>');
      var $a = $('<a>').attr('href', o['pageUrlPk']);
      $a.append($i);
      $a.append($span);
      $li.append($a);
      $list.append($li);
    });
  };
  error = function( jqXhr, textStatus, errorThrown ) {};
  searchParkingAccessVals($formFilters, success, error);
}

// GET //

async function getParkingAccess(pk) {
  $.ajax({
    url: '/api/parking-access/' + id
    , dataType: 'json'
    , type: 'GET'
    , contentType: 'application/json; charset=utf-8'
    , success: success
    , error: error
  });
}

// PATCH //

async function patchParkingAccess($formFilters, $formValues, pk, success, error) {
  var filters = patchParkingAccessFilters($formFilters);

  var vals = {};

  var valueCreated = $formValues.find('.valueCreated').val();
  var removeCreated = $formValues.find('.removeCreated').val() === 'true';
  var setCreated = removeCreated ? null : $formValues.find('.setCreated').val();
  var addCreated = $formValues.find('.addCreated').val();
  if(removeCreated || setCreated != null && setCreated !== '')
    vals['setCreated'] = setCreated;
  if(addCreated != null && addCreated !== '')
    vals['addCreated'] = addCreated;
  var removeCreated = $formValues.find('.removeCreated').val();
  if(removeCreated != null && removeCreated !== '')
    vals['removeCreated'] = removeCreated;

  var valueModified = $formValues.find('.valueModified').val();
  var removeModified = $formValues.find('.removeModified').val() === 'true';
  var setModified = removeModified ? null : $formValues.find('.setModified').val();
  var addModified = $formValues.find('.addModified').val();
  if(removeModified || setModified != null && setModified !== '')
    vals['setModified'] = setModified;
  if(addModified != null && addModified !== '')
    vals['addModified'] = addModified;
  var removeModified = $formValues.find('.removeModified').val();
  if(removeModified != null && removeModified !== '')
    vals['removeModified'] = removeModified;

  var valueObjectId = $formValues.find('.valueObjectId').val();
  var removeObjectId = $formValues.find('.removeObjectId').val() === 'true';
  var setObjectId = removeObjectId ? null : $formValues.find('.setObjectId').val();
  var addObjectId = $formValues.find('.addObjectId').val();
  if(removeObjectId || setObjectId != null && setObjectId !== '')
    vals['setObjectId'] = setObjectId;
  if(addObjectId != null && addObjectId !== '')
    vals['addObjectId'] = addObjectId;
  var removeObjectId = $formValues.find('.removeObjectId').val();
  if(removeObjectId != null && removeObjectId !== '')
    vals['removeObjectId'] = removeObjectId;

  var valueArchived = $formValues.find('.valueArchived').val();
  var removeArchived = $formValues.find('.removeArchived').val() === 'true';
  var valueArchivedSelectVal = $formValues.find('select.setArchived').val();
  if(valueArchivedSelectVal != null && valueArchivedSelectVal !== '')
    valueArchived = valueArchivedSelectVal == 'true';
  var setArchived = removeArchived ? null : valueArchived;
  var addArchived = $formValues.find('.addArchived').prop('checked');
  if(removeArchived || setArchived != null && setArchived !== '')
    vals['setArchived'] = setArchived;
  if(addArchived != null && addArchived !== '')
    vals['addArchived'] = addArchived;
  var removeArchived = $formValues.find('.removeArchived').prop('checked');
  if(removeArchived != null && removeArchived !== '')
    vals['removeArchived'] = removeArchived;

  var valueDeleted = $formValues.find('.valueDeleted').val();
  var removeDeleted = $formValues.find('.removeDeleted').val() === 'true';
  var valueDeletedSelectVal = $formValues.find('select.setDeleted').val();
  if(valueDeletedSelectVal != null && valueDeletedSelectVal !== '')
    valueDeleted = valueDeletedSelectVal == 'true';
  var setDeleted = removeDeleted ? null : valueDeleted;
  var addDeleted = $formValues.find('.addDeleted').prop('checked');
  if(removeDeleted || setDeleted != null && setDeleted !== '')
    vals['setDeleted'] = setDeleted;
  if(addDeleted != null && addDeleted !== '')
    vals['addDeleted'] = addDeleted;
  var removeDeleted = $formValues.find('.removeDeleted').prop('checked');
  if(removeDeleted != null && removeDeleted !== '')
    vals['removeDeleted'] = removeDeleted;

  var valueAddress = $formValues.find('.valueAddress').val();
  var removeAddress = $formValues.find('.removeAddress').val() === 'true';
  var setAddress = removeAddress ? null : $formValues.find('.setAddress').val();
  var addAddress = $formValues.find('.addAddress').val();
  if(removeAddress || setAddress != null && setAddress !== '')
    vals['setAddress'] = JSON.parse(setAddress);
  if(addAddress != null && addAddress !== '')
    vals['addAddress'] = addAddress;
  var removeAddress = $formValues.find('.removeAddress').val();
  if(removeAddress != null && removeAddress !== '')
    vals['removeAddress'] = removeAddress;

  var valueAlternateName = $formValues.find('.valueAlternateName').val();
  var removeAlternateName = $formValues.find('.removeAlternateName').val() === 'true';
  var setAlternateName = removeAlternateName ? null : $formValues.find('.setAlternateName').val();
  var addAlternateName = $formValues.find('.addAlternateName').val();
  if(removeAlternateName || setAlternateName != null && setAlternateName !== '')
    vals['setAlternateName'] = setAlternateName;
  if(addAlternateName != null && addAlternateName !== '')
    vals['addAlternateName'] = addAlternateName;
  var removeAlternateName = $formValues.find('.removeAlternateName').val();
  if(removeAlternateName != null && removeAlternateName !== '')
    vals['removeAlternateName'] = removeAlternateName;

  var valueAreaServed = $formValues.find('.valueAreaServed').val();
  var removeAreaServed = $formValues.find('.removeAreaServed').val() === 'true';
  var setAreaServed = removeAreaServed ? null : $formValues.find('.setAreaServed').val();
  var addAreaServed = $formValues.find('.addAreaServed').val();
  if(removeAreaServed || setAreaServed != null && setAreaServed !== '')
    vals['setAreaServed'] = JSON.parse(setAreaServed);
  if(addAreaServed != null && addAreaServed !== '')
    vals['addAreaServed'] = addAreaServed;
  var removeAreaServed = $formValues.find('.removeAreaServed').val();
  if(removeAreaServed != null && removeAreaServed !== '')
    vals['removeAreaServed'] = removeAreaServed;

  var valueCategory = $formValues.find('.valueCategory').val();
  var removeCategory = $formValues.find('.removeCategory').val() === 'true';
  var setCategory = removeCategory ? null : $formValues.find('.setCategory').val();
  var addCategory = $formValues.find('.addCategory').val();
  if(removeCategory || setCategory != null && setCategory !== '')
    vals['setCategory'] = JSON.parse(setCategory);
  if(addCategory != null && addCategory !== '')
    vals['addCategory'] = addCategory;
  var removeCategory = $formValues.find('.removeCategory').val();
  if(removeCategory != null && removeCategory !== '')
    vals['removeCategory'] = removeCategory;

  var valueDataProvider = $formValues.find('.valueDataProvider').val();
  var removeDataProvider = $formValues.find('.removeDataProvider').val() === 'true';
  var setDataProvider = removeDataProvider ? null : $formValues.find('.setDataProvider').val();
  var addDataProvider = $formValues.find('.addDataProvider').val();
  if(removeDataProvider || setDataProvider != null && setDataProvider !== '')
    vals['setDataProvider'] = setDataProvider;
  if(addDataProvider != null && addDataProvider !== '')
    vals['addDataProvider'] = addDataProvider;
  var removeDataProvider = $formValues.find('.removeDataProvider').val();
  if(removeDataProvider != null && removeDataProvider !== '')
    vals['removeDataProvider'] = removeDataProvider;

  var valueDateCreated = $formValues.find('.valueDateCreated').val();
  var removeDateCreated = $formValues.find('.removeDateCreated').val() === 'true';
  var setDateCreated = removeDateCreated ? null : $formValues.find('.setDateCreated').val();
  var addDateCreated = $formValues.find('.addDateCreated').val();
  if(removeDateCreated || setDateCreated != null && setDateCreated !== '')
    vals['setDateCreated'] = setDateCreated;
  if(addDateCreated != null && addDateCreated !== '')
    vals['addDateCreated'] = addDateCreated;
  var removeDateCreated = $formValues.find('.removeDateCreated').val();
  if(removeDateCreated != null && removeDateCreated !== '')
    vals['removeDateCreated'] = removeDateCreated;

  var valueDateModified = $formValues.find('.valueDateModified').val();
  var removeDateModified = $formValues.find('.removeDateModified').val() === 'true';
  var setDateModified = removeDateModified ? null : $formValues.find('.setDateModified').val();
  var addDateModified = $formValues.find('.addDateModified').val();
  if(removeDateModified || setDateModified != null && setDateModified !== '')
    vals['setDateModified'] = setDateModified;
  if(addDateModified != null && addDateModified !== '')
    vals['addDateModified'] = addDateModified;
  var removeDateModified = $formValues.find('.removeDateModified').val();
  if(removeDateModified != null && removeDateModified !== '')
    vals['removeDateModified'] = removeDateModified;

  var valueDescription = $formValues.find('.valueDescription').val();
  var removeDescription = $formValues.find('.removeDescription').val() === 'true';
  var setDescription = removeDescription ? null : $formValues.find('.setDescription').val();
  var addDescription = $formValues.find('.addDescription').val();
  if(removeDescription || setDescription != null && setDescription !== '')
    vals['setDescription'] = setDescription;
  if(addDescription != null && addDescription !== '')
    vals['addDescription'] = addDescription;
  var removeDescription = $formValues.find('.removeDescription').val();
  if(removeDescription != null && removeDescription !== '')
    vals['removeDescription'] = removeDescription;

  var valueFeatures = $formValues.find('.valueFeatures').val();
  var removeFeatures = $formValues.find('.removeFeatures').val() === 'true';
  var setFeatures = removeFeatures ? null : $formValues.find('.setFeatures').val();
  var addFeatures = $formValues.find('.addFeatures').val();
  if(removeFeatures || setFeatures != null && setFeatures !== '')
    vals['setFeatures'] = JSON.parse(setFeatures);
  if(addFeatures != null && addFeatures !== '')
    vals['addFeatures'] = addFeatures;
  var removeFeatures = $formValues.find('.removeFeatures').val();
  if(removeFeatures != null && removeFeatures !== '')
    vals['removeFeatures'] = removeFeatures;

  var valueHeight = $formValues.find('.valueHeight').val();
  var removeHeight = $formValues.find('.removeHeight').val() === 'true';
  var setHeight = removeHeight ? null : $formValues.find('.setHeight').val();
  var addHeight = $formValues.find('.addHeight').val();
  if(removeHeight || setHeight != null && setHeight !== '')
    vals['setHeight'] = setHeight;
  if(addHeight != null && addHeight !== '')
    vals['addHeight'] = addHeight;
  var removeHeight = $formValues.find('.removeHeight').val();
  if(removeHeight != null && removeHeight !== '')
    vals['removeHeight'] = removeHeight;

  var valueLocation = $formValues.find('.valueLocation').val();
  var removeLocation = $formValues.find('.removeLocation').val() === 'true';
  var setLocation = removeLocation ? null : $formValues.find('.setLocation').val();
  var addLocation = $formValues.find('.addLocation').val();
  if(removeLocation || setLocation != null && setLocation !== '')
    vals['setLocation'] = JSON.parse(setLocation);
  if(addLocation != null && addLocation !== '')
    vals['addLocation'] = addLocation;
  var removeLocation = $formValues.find('.removeLocation').val();
  if(removeLocation != null && removeLocation !== '')
    vals['removeLocation'] = removeLocation;

  var valueName = $formValues.find('.valueName').val();
  var removeName = $formValues.find('.removeName').val() === 'true';
  var setName = removeName ? null : $formValues.find('.setName').val();
  var addName = $formValues.find('.addName').val();
  if(removeName || setName != null && setName !== '')
    vals['setName'] = setName;
  if(addName != null && addName !== '')
    vals['addName'] = addName;
  var removeName = $formValues.find('.removeName').val();
  if(removeName != null && removeName !== '')
    vals['removeName'] = removeName;

  var valueOwner = $formValues.find('.valueOwner').val();
  var removeOwner = $formValues.find('.removeOwner').val() === 'true';
  var setOwner = removeOwner ? null : $formValues.find('.setOwner').val();
  var addOwner = $formValues.find('.addOwner').val();
  if(removeOwner || setOwner != null && setOwner !== '')
    vals['setOwner'] = JSON.parse(setOwner);
  if(addOwner != null && addOwner !== '')
    vals['addOwner'] = addOwner;
  var removeOwner = $formValues.find('.removeOwner').val();
  if(removeOwner != null && removeOwner !== '')
    vals['removeOwner'] = removeOwner;

  var valueRefOffStreetParking = $formValues.find('.valueRefOffStreetParking').val();
  var removeRefOffStreetParking = $formValues.find('.removeRefOffStreetParking').val() === 'true';
  var setRefOffStreetParking = removeRefOffStreetParking ? null : $formValues.find('.setRefOffStreetParking').val();
  var addRefOffStreetParking = $formValues.find('.addRefOffStreetParking').val();
  if(removeRefOffStreetParking || setRefOffStreetParking != null && setRefOffStreetParking !== '')
    vals['setRefOffStreetParking'] = JSON.parse(setRefOffStreetParking);
  if(addRefOffStreetParking != null && addRefOffStreetParking !== '')
    vals['addRefOffStreetParking'] = addRefOffStreetParking;
  var removeRefOffStreetParking = $formValues.find('.removeRefOffStreetParking').val();
  if(removeRefOffStreetParking != null && removeRefOffStreetParking !== '')
    vals['removeRefOffStreetParking'] = removeRefOffStreetParking;

  var valueSeeAlso = $formValues.find('.valueSeeAlso').val();
  var removeSeeAlso = $formValues.find('.removeSeeAlso').val() === 'true';
  var setSeeAlso = removeSeeAlso ? null : $formValues.find('.setSeeAlso').val();
  var addSeeAlso = $formValues.find('.addSeeAlso').val();
  if(removeSeeAlso || setSeeAlso != null && setSeeAlso !== '')
    vals['setSeeAlso'] = JSON.parse(setSeeAlso);
  if(addSeeAlso != null && addSeeAlso !== '')
    vals['addSeeAlso'] = addSeeAlso;
  var removeSeeAlso = $formValues.find('.removeSeeAlso').val();
  if(removeSeeAlso != null && removeSeeAlso !== '')
    vals['removeSeeAlso'] = removeSeeAlso;

  var valueSlope = $formValues.find('.valueSlope').val();
  var removeSlope = $formValues.find('.removeSlope').val() === 'true';
  var setSlope = removeSlope ? null : $formValues.find('.setSlope').val();
  var addSlope = $formValues.find('.addSlope').val();
  if(removeSlope || setSlope != null && setSlope !== '')
    vals['setSlope'] = setSlope;
  if(addSlope != null && addSlope !== '')
    vals['addSlope'] = addSlope;
  var removeSlope = $formValues.find('.removeSlope').val();
  if(removeSlope != null && removeSlope !== '')
    vals['removeSlope'] = removeSlope;

  var valueSource = $formValues.find('.valueSource').val();
  var removeSource = $formValues.find('.removeSource').val() === 'true';
  var setSource = removeSource ? null : $formValues.find('.setSource').val();
  var addSource = $formValues.find('.addSource').val();
  if(removeSource || setSource != null && setSource !== '')
    vals['setSource'] = setSource;
  if(addSource != null && addSource !== '')
    vals['addSource'] = addSource;
  var removeSource = $formValues.find('.removeSource').val();
  if(removeSource != null && removeSource !== '')
    vals['removeSource'] = removeSource;

  var valueWidth = $formValues.find('.valueWidth').val();
  var removeWidth = $formValues.find('.removeWidth').val() === 'true';
  var setWidth = removeWidth ? null : $formValues.find('.setWidth').val();
  var addWidth = $formValues.find('.addWidth').val();
  if(removeWidth || setWidth != null && setWidth !== '')
    vals['setWidth'] = setWidth;
  if(addWidth != null && addWidth !== '')
    vals['addWidth'] = addWidth;
  var removeWidth = $formValues.find('.removeWidth').val();
  if(removeWidth != null && removeWidth !== '')
    vals['removeWidth'] = removeWidth;

  var valueInheritPk = $formValues.find('.valueInheritPk').val();
  var removeInheritPk = $formValues.find('.removeInheritPk').val() === 'true';
  var setInheritPk = removeInheritPk ? null : $formValues.find('.setInheritPk').val();
  var addInheritPk = $formValues.find('.addInheritPk').val();
  if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
    vals['setInheritPk'] = setInheritPk;
  if(addInheritPk != null && addInheritPk !== '')
    vals['addInheritPk'] = addInheritPk;
  var removeInheritPk = $formValues.find('.removeInheritPk').val();
  if(removeInheritPk != null && removeInheritPk !== '')
    vals['removeInheritPk'] = removeInheritPk;

  var valueSessionId = $formValues.find('.valueSessionId').val();
  var removeSessionId = $formValues.find('.removeSessionId').val() === 'true';
  var setSessionId = removeSessionId ? null : $formValues.find('.setSessionId').val();
  var addSessionId = $formValues.find('.addSessionId').val();
  if(removeSessionId || setSessionId != null && setSessionId !== '')
    vals['setSessionId'] = setSessionId;
  if(addSessionId != null && addSessionId !== '')
    vals['addSessionId'] = addSessionId;
  var removeSessionId = $formValues.find('.removeSessionId').val();
  if(removeSessionId != null && removeSessionId !== '')
    vals['removeSessionId'] = removeSessionId;

  var valueUserKey = $formValues.find('.valueUserKey').val();
  var removeUserKey = $formValues.find('.removeUserKey').val() === 'true';
  var setUserKey = removeUserKey ? null : $formValues.find('.setUserKey').val();
  var addUserKey = $formValues.find('.addUserKey').val();
  if(removeUserKey || setUserKey != null && setUserKey !== '')
    vals['setUserKey'] = setUserKey;
  if(addUserKey != null && addUserKey !== '')
    vals['addUserKey'] = addUserKey;
  var removeUserKey = $formValues.find('.removeUserKey').val();
  if(removeUserKey != null && removeUserKey !== '')
    vals['removeUserKey'] = removeUserKey;

  var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
  var removeObjectTitle = $formValues.find('.removeObjectTitle').val() === 'true';
  var setObjectTitle = removeObjectTitle ? null : $formValues.find('.setObjectTitle').val();
  var addObjectTitle = $formValues.find('.addObjectTitle').val();
  if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
    vals['setObjectTitle'] = setObjectTitle;
  if(addObjectTitle != null && addObjectTitle !== '')
    vals['addObjectTitle'] = addObjectTitle;
  var removeObjectTitle = $formValues.find('.removeObjectTitle').val();
  if(removeObjectTitle != null && removeObjectTitle !== '')
    vals['removeObjectTitle'] = removeObjectTitle;

  patchParkingAccessVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchParkingAccessFilters($formFilters) {
  var filters = [];
  if($formFilters) {
    filters.push({ name: 'softCommit', value: 'true' });

    var filterCreated = $formFilters.find('.valueCreated').val();
    if(filterCreated != null && filterCreated !== '')
      filters.push({ name: 'fq', value: 'created:' + filterCreated });

    var filterModified = $formFilters.find('.valueModified').val();
    if(filterModified != null && filterModified !== '')
      filters.push({ name: 'fq', value: 'modified:' + filterModified });

    var filterObjectId = $formFilters.find('.valueObjectId').val();
    if(filterObjectId != null && filterObjectId !== '')
      filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

    var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
    var $filterArchivedSelect = $formFilters.find('select.valueArchived');
    var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
    var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
    var filterArchived = null;
    if(filterArchivedSelectVal !== '')
      filterArchived = filterArchivedSelectVal == 'true';
    if(filterArchived != null && filterArchived === true)
      filters.push({ name: 'fq', value: 'archived:' + filterArchived });

    var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
    var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
    var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
    var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
    var filterDeleted = null;
    if(filterDeletedSelectVal !== '')
      filterDeleted = filterDeletedSelectVal == 'true';
    if(filterDeleted != null && filterDeleted === true)
      filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

    var filterAddress = $formFilters.find('.valueAddress').val();
    if(filterAddress != null && filterAddress !== '')
      filters.push({ name: 'fq', value: 'address:' + filterAddress });

    var filterAlternateName = $formFilters.find('.valueAlternateName').val();
    if(filterAlternateName != null && filterAlternateName !== '')
      filters.push({ name: 'fq', value: 'alternateName:' + filterAlternateName });

    var filterAreaServed = $formFilters.find('.valueAreaServed').val();
    if(filterAreaServed != null && filterAreaServed !== '')
      filters.push({ name: 'fq', value: 'areaServed:' + filterAreaServed });

    var filterCategory = $formFilters.find('.valueCategory').val();
    if(filterCategory != null && filterCategory !== '')
      filters.push({ name: 'fq', value: 'category:' + filterCategory });

    var filterDataProvider = $formFilters.find('.valueDataProvider').val();
    if(filterDataProvider != null && filterDataProvider !== '')
      filters.push({ name: 'fq', value: 'dataProvider:' + filterDataProvider });

    var filterDateCreated = $formFilters.find('.valueDateCreated').val();
    if(filterDateCreated != null && filterDateCreated !== '')
      filters.push({ name: 'fq', value: 'dateCreated:' + filterDateCreated });

    var filterDateModified = $formFilters.find('.valueDateModified').val();
    if(filterDateModified != null && filterDateModified !== '')
      filters.push({ name: 'fq', value: 'dateModified:' + filterDateModified });

    var filterDescription = $formFilters.find('.valueDescription').val();
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var filterFeatures = $formFilters.find('.valueFeatures').val();
    if(filterFeatures != null && filterFeatures !== '')
      filters.push({ name: 'fq', value: 'features:' + filterFeatures });

    var filterHeight = $formFilters.find('.valueHeight').val();
    if(filterHeight != null && filterHeight !== '')
      filters.push({ name: 'fq', value: 'height:' + filterHeight });

    var filterLocation = $formFilters.find('.valueLocation').val();
    if(filterLocation != null && filterLocation !== '')
      filters.push({ name: 'fq', value: 'location:' + filterLocation });

    var filterName = $formFilters.find('.valueName').val();
    if(filterName != null && filterName !== '')
      filters.push({ name: 'fq', value: 'name:' + filterName });

    var filterOwner = $formFilters.find('.valueOwner').val();
    if(filterOwner != null && filterOwner !== '')
      filters.push({ name: 'fq', value: 'owner:' + filterOwner });

    var filterRefOffStreetParking = $formFilters.find('.valueRefOffStreetParking').val();
    if(filterRefOffStreetParking != null && filterRefOffStreetParking !== '')
      filters.push({ name: 'fq', value: 'refOffStreetParking:' + filterRefOffStreetParking });

    var filterSeeAlso = $formFilters.find('.valueSeeAlso').val();
    if(filterSeeAlso != null && filterSeeAlso !== '')
      filters.push({ name: 'fq', value: 'seeAlso:' + filterSeeAlso });

    var filterSlope = $formFilters.find('.valueSlope').val();
    if(filterSlope != null && filterSlope !== '')
      filters.push({ name: 'fq', value: 'slope:' + filterSlope });

    var filterSource = $formFilters.find('.valueSource').val();
    if(filterSource != null && filterSource !== '')
      filters.push({ name: 'fq', value: 'source:' + filterSource });

    var filterWidth = $formFilters.find('.valueWidth').val();
    if(filterWidth != null && filterWidth !== '')
      filters.push({ name: 'fq', value: 'width:' + filterWidth });

    var filterPk = $formFilters.find('.valuePk').val();
    if(filterPk != null && filterPk !== '')
      filters.push({ name: 'fq', value: 'pk:' + filterPk });

    var filterInheritPk = $formFilters.find('.valueInheritPk').val();
    if(filterInheritPk != null && filterInheritPk !== '')
      filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

    var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
    if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
      filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

    var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
    if(filterClassSimpleName != null && filterClassSimpleName !== '')
      filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

    var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
    if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
      filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

    var filterSessionId = $formFilters.find('.valueSessionId').val();
    if(filterSessionId != null && filterSessionId !== '')
      filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

    var filterUserKey = $formFilters.find('.valueUserKey').val();
    if(filterUserKey != null && filterUserKey !== '')
      filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

    var filterSaves = $formFilters.find('.valueSaves').val();
    if(filterSaves != null && filterSaves !== '')
      filters.push({ name: 'fq', value: 'saves:' + filterSaves });

    var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
    if(filterObjectTitle != null && filterObjectTitle !== '')
      filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

    var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
    if(filterPageUrlPk != null && filterPageUrlPk !== '')
      filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

    var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
    if(filterPageUrlApi != null && filterPageUrlApi !== '')
      filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

    var filterId = $formFilters.find('.valueId').val();
    if(filterId != null && filterId !== '')
      filters.push({ name: 'fq', value: 'id:' + filterId });

    var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.find('.valueObjectText').val();
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
    if(filterPageUrlId != null && filterPageUrlId !== '')
      filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });
  }
  return filters;
}

function patchParkingAccessVal(filters, v, val, success, error) {
  var vals = {};
  vals[v] = val;
  patchParkingAccessVals(filters, vals, success, error);
}

function patchParkingAccessVals(filters, vals, success, error) {
  $.ajax({
    url: '/api/parking-access?' + $.param(filters)
    , dataType: 'json'
    , type: 'PATCH'
    , contentType: 'application/json; charset=utf-8'
    , data: JSON.stringify(vals)
    , success: success
    , error: error
  });
}

// POST //

async function postParkingAccess($formValues, success, error) {
  var vals = {};
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow($formValues.next('button'));
      var url = data['pageUrlPk'];
      if(url)
        window.location.href = url;
    };
  }
  if(error == null) {
    error = function( jqXhr, textStatus, errorThrown ) {
      addError($formValues.next('button'));
    };
  }

  var valueCreated = $formValues.find('.valueCreated').val();
  if(valueCreated != null && valueCreated !== '')
    vals['created'] = valueCreated;

  var valueModified = $formValues.find('.valueModified').val();
  if(valueModified != null && valueModified !== '')
    vals['modified'] = valueModified;

  var valueObjectId = $formValues.find('.valueObjectId').val();
  if(valueObjectId != null && valueObjectId !== '')
    vals['objectId'] = valueObjectId;

  var valueArchived = $formValues.find('.valueArchived').val();
  if(valueArchived != null && valueArchived !== '')
    vals['archived'] = valueArchived == 'true';

  var valueDeleted = $formValues.find('.valueDeleted').val();
  if(valueDeleted != null && valueDeleted !== '')
    vals['deleted'] = valueDeleted == 'true';

  var valueAddress = $formValues.find('.valueAddress').val();
  if(valueAddress != null && valueAddress !== '')
    vals['address'] = JSON.parse(valueAddress);

  var valueAlternateName = $formValues.find('.valueAlternateName').val();
  if(valueAlternateName != null && valueAlternateName !== '')
    vals['alternateName'] = valueAlternateName;

  var valueAreaServed = $formValues.find('.valueAreaServed').val();
  if(valueAreaServed != null && valueAreaServed !== '')
    vals['areaServed'] = JSON.parse(valueAreaServed);

  var valueCategory = $formValues.find('.valueCategory').val();
  if(valueCategory != null && valueCategory !== '')
    vals['category'] = JSON.parse(valueCategory);

  var valueDataProvider = $formValues.find('.valueDataProvider').val();
  if(valueDataProvider != null && valueDataProvider !== '')
    vals['dataProvider'] = valueDataProvider;

  var valueDateCreated = $formValues.find('.valueDateCreated').val();
  if(valueDateCreated != null && valueDateCreated !== '')
    vals['dateCreated'] = valueDateCreated;

  var valueDateModified = $formValues.find('.valueDateModified').val();
  if(valueDateModified != null && valueDateModified !== '')
    vals['dateModified'] = valueDateModified;

  var valueDescription = $formValues.find('.valueDescription').val();
  if(valueDescription != null && valueDescription !== '')
    vals['description'] = valueDescription;

  var valueFeatures = $formValues.find('.valueFeatures').val();
  if(valueFeatures != null && valueFeatures !== '')
    vals['features'] = JSON.parse(valueFeatures);

  var valueHeight = $formValues.find('.valueHeight').val();
  if(valueHeight != null && valueHeight !== '')
    vals['height'] = valueHeight;

  var valueLocation = $formValues.find('.valueLocation').val();
  if(valueLocation != null && valueLocation !== '')
    vals['location'] = JSON.parse(valueLocation);

  var valueName = $formValues.find('.valueName').val();
  if(valueName != null && valueName !== '')
    vals['name'] = valueName;

  var valueOwner = $formValues.find('.valueOwner').val();
  if(valueOwner != null && valueOwner !== '')
    vals['owner'] = JSON.parse(valueOwner);

  var valueRefOffStreetParking = $formValues.find('.valueRefOffStreetParking').val();
  if(valueRefOffStreetParking != null && valueRefOffStreetParking !== '')
    vals['refOffStreetParking'] = JSON.parse(valueRefOffStreetParking);

  var valueSeeAlso = $formValues.find('.valueSeeAlso').val();
  if(valueSeeAlso != null && valueSeeAlso !== '')
    vals['seeAlso'] = JSON.parse(valueSeeAlso);

  var valueSlope = $formValues.find('.valueSlope').val();
  if(valueSlope != null && valueSlope !== '')
    vals['slope'] = valueSlope;

  var valueSource = $formValues.find('.valueSource').val();
  if(valueSource != null && valueSource !== '')
    vals['source'] = valueSource;

  var valueWidth = $formValues.find('.valueWidth').val();
  if(valueWidth != null && valueWidth !== '')
    vals['width'] = valueWidth;

  var valueInheritPk = $formValues.find('.valueInheritPk').val();
  if(valueInheritPk != null && valueInheritPk !== '')
    vals['inheritPk'] = valueInheritPk;

  var valueSessionId = $formValues.find('.valueSessionId').val();
  if(valueSessionId != null && valueSessionId !== '')
    vals['sessionId'] = valueSessionId;

  var valueUserKey = $formValues.find('.valueUserKey').val();
  if(valueUserKey != null && valueUserKey !== '')
    vals['userKey'] = valueUserKey;

  var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
  if(valueObjectTitle != null && valueObjectTitle !== '')
    vals['objectTitle'] = valueObjectTitle;

  $.ajax({
    url: '/api/parking-access'
    , dataType: 'json'
    , type: 'POST'
    , contentType: 'application/json; charset=utf-8'
    , data: JSON.stringify(vals)
    , success: success
    , error: error
  });
}

function postParkingAccessVals(vals, success, error) {
  $.ajax({
    url: '/api/parking-access'
    , dataType: 'json'
    , type: 'POST'
    , contentType: 'application/json; charset=utf-8'
    , data: JSON.stringify(vals)
    , success: success
    , error: error
  });
}

// PUTImport //

async function putimportParkingAccess($formValues, pk, success, error) {
  var json = $formValues.find('.PUTImport_searchList').val();
  if(json != null && json !== '')
    putimportParkingAccessVals(JSON.parse(json), success, error);
}

function putimportParkingAccessVals(json, success, error) {
  $.ajax({
    url: '/api/parking-access-import'
    , dataType: 'json'
    , type: 'PUT'
    , contentType: 'application/json; charset=utf-8'
    , data: JSON.stringify(json)
    , success: success
    , error: error
  });
}

async function websocketParkingAccess(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketParkingAccess', function (error, message) {
      var json = JSON.parse(message['body']);
      var id = json['id'];
      var pk = json['pk'];
      var pkPage = $('#ParkingAccessForm :input[name=pk]').val();
      var pks = json['pks'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = $('<div>').attr('class', 'w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
      var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
      var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
      var $header = $('<div>').attr('class', 'w3-container fa-2017-shaded-spruce ').attr('id', 'header-' + id);
      var $i = $('<i>').attr('class', 'fad fa-map-location-dot w3-margin-right ').attr('id', 'icon-' + id);
      var $headerSpan = $('<span>').attr('class', '').text('modify ParkingAccesss in ' + json.timeRemaining);
      var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
      var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
      var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
      var $progress = $('<div>').attr('class', 'w3-2017-shaded-spruce ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
      $card.append($header);
      $header.append($i);
      $header.append($headerSpan);
      $header.append($x);
      $body.append($bar);
      $bar.append($progress);
      $card.append($body);
      $box.append($margin);
      $margin.append($card);
      if(numPATCH < numFound) {
        var $old_box = $('.box-' + id);
        if(!$old_box.size()) {
          $('.top-box').append($box);
        } else if($old_box && $old_box.attr('data-numPATCH') < numFound) {
          $('.box-' + id).html($margin);
        }
      } else {
        $('.box-' + id).remove();
      }
      if(pk && pkPage && pk == pkPage) {
        if(success)
          success(json);
      }
    });
  }
}
async function websocketParkingAccessInner(apiRequest) {
  var pk = apiRequest['pk'];
  var pks = apiRequest['pks'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(pk != null && vars.length > 0) {
    var queryParams = "?" + $(".pageSearchVal").get().filter(elem => elem.innerText.length > 0).map(elem => elem.innerText).join("&");
    var uri = location.pathname + queryParams;
    $.get(uri, {}, function(data) {
      var $response = $("<html/>").html(data);
        var inputCreated = null;
        var inputModified = null;
        var inputObjectId = null;
        var inputArchived = null;
        var inputDeleted = null;
        var inputAddress = null;
        var inputAlternateName = null;
        var inputAreaServed = null;
        var inputCategory = null;
        var inputDataProvider = null;
        var inputDateCreated = null;
        var inputDateModified = null;
        var inputDescription = null;
        var inputFeatures = null;
        var inputHeight = null;
        var inputLocation = null;
        var inputName = null;
        var inputOwner = null;
        var inputRefOffStreetParking = null;
        var inputSeeAlso = null;
        var inputSlope = null;
        var inputSource = null;
        var inputWidth = null;
        var inputPk = null;
        var inputInheritPk = null;
        var inputClassCanonicalName = null;
        var inputClassSimpleName = null;
        var inputClassCanonicalNames = null;
        var inputSessionId = null;
        var inputUserKey = null;
        var inputSaves = null;
        var inputObjectTitle = null;
        var inputPageUrlPk = null;
        var inputPageUrlApi = null;
        var inputId = null;
        var inputObjectSuggest = null;
        var inputObjectText = null;
        var inputPageUrlId = null;

        if(vars.includes('created'))
          inputCreated = $response.find('.Page_created');
        if(vars.includes('modified'))
          inputModified = $response.find('.Page_modified');
        if(vars.includes('objectId'))
          inputObjectId = $response.find('.Page_objectId');
        if(vars.includes('archived'))
          inputArchived = $response.find('.Page_archived');
        if(vars.includes('deleted'))
          inputDeleted = $response.find('.Page_deleted');
        if(vars.includes('address'))
          inputAddress = $response.find('.Page_address');
        if(vars.includes('alternateName'))
          inputAlternateName = $response.find('.Page_alternateName');
        if(vars.includes('areaServed'))
          inputAreaServed = $response.find('.Page_areaServed');
        if(vars.includes('category'))
          inputCategory = $response.find('.Page_category');
        if(vars.includes('dataProvider'))
          inputDataProvider = $response.find('.Page_dataProvider');
        if(vars.includes('dateCreated'))
          inputDateCreated = $response.find('.Page_dateCreated');
        if(vars.includes('dateModified'))
          inputDateModified = $response.find('.Page_dateModified');
        if(vars.includes('description'))
          inputDescription = $response.find('.Page_description');
        if(vars.includes('features'))
          inputFeatures = $response.find('.Page_features');
        if(vars.includes('height'))
          inputHeight = $response.find('.Page_height');
        if(vars.includes('location'))
          inputLocation = $response.find('.Page_location');
        if(vars.includes('name'))
          inputName = $response.find('.Page_name');
        if(vars.includes('owner'))
          inputOwner = $response.find('.Page_owner');
        if(vars.includes('refOffStreetParking'))
          inputRefOffStreetParking = $response.find('.Page_refOffStreetParking');
        if(vars.includes('seeAlso'))
          inputSeeAlso = $response.find('.Page_seeAlso');
        if(vars.includes('slope'))
          inputSlope = $response.find('.Page_slope');
        if(vars.includes('source'))
          inputSource = $response.find('.Page_source');
        if(vars.includes('width'))
          inputWidth = $response.find('.Page_width');
        if(vars.includes('pk'))
          inputPk = $response.find('.Page_pk');
        if(vars.includes('inheritPk'))
          inputInheritPk = $response.find('.Page_inheritPk');
        if(vars.includes('classCanonicalName'))
          inputClassCanonicalName = $response.find('.Page_classCanonicalName');
        if(vars.includes('classSimpleName'))
          inputClassSimpleName = $response.find('.Page_classSimpleName');
        if(vars.includes('classCanonicalNames'))
          inputClassCanonicalNames = $response.find('.Page_classCanonicalNames');
        if(vars.includes('sessionId'))
          inputSessionId = $response.find('.Page_sessionId');
        if(vars.includes('userKey'))
          inputUserKey = $response.find('.Page_userKey');
        if(vars.includes('saves'))
          inputSaves = $response.find('.Page_saves');
        if(vars.includes('objectTitle'))
          inputObjectTitle = $response.find('.Page_objectTitle');
        if(vars.includes('pageUrlPk'))
          inputPageUrlPk = $response.find('.Page_pageUrlPk');
        if(vars.includes('pageUrlApi'))
          inputPageUrlApi = $response.find('.Page_pageUrlApi');
        if(vars.includes('id'))
          inputId = $response.find('.Page_id');
        if(vars.includes('objectSuggest'))
          inputObjectSuggest = $response.find('.Page_objectSuggest');
        if(vars.includes('objectText'))
          inputObjectText = $response.find('.Page_objectText');
        if(vars.includes('pageUrlId'))
          inputPageUrlId = $response.find('.Page_pageUrlId');
        jsWebsocketParkingAccess(pk, vars, $response);

        window.parkingAccess = JSON.parse($response.find('.pageForm .parkingAccess').val());
        window.listParkingAccess = JSON.parse($response.find('.pageForm .listParkingAccess').val());


        if(inputCreated) {
          inputCreated.replaceAll('.Page_created');
          addGlow($('.Page_created'));
        }

        if(inputModified) {
          inputModified.replaceAll('.Page_modified');
          addGlow($('.Page_modified'));
        }

        if(inputObjectId) {
          inputObjectId.replaceAll('.Page_objectId');
          addGlow($('.Page_objectId'));
        }

        if(inputArchived) {
          inputArchived.replaceAll('.Page_archived');
          addGlow($('.Page_archived'));
        }

        if(inputDeleted) {
          inputDeleted.replaceAll('.Page_deleted');
          addGlow($('.Page_deleted'));
        }

        if(inputAddress) {
          inputAddress.replaceAll('.Page_address');
          addGlow($('.Page_address'));
        }

        if(inputAlternateName) {
          inputAlternateName.replaceAll('.Page_alternateName');
          addGlow($('.Page_alternateName'));
        }

        if(inputAreaServed) {
          inputAreaServed.replaceAll('.Page_areaServed');
          addGlow($('.Page_areaServed'));
        }

        if(inputCategory) {
          inputCategory.replaceAll('.Page_category');
          addGlow($('.Page_category'));
        }

        if(inputDataProvider) {
          inputDataProvider.replaceAll('.Page_dataProvider');
          addGlow($('.Page_dataProvider'));
        }

        if(inputDateCreated) {
          inputDateCreated.replaceAll('.Page_dateCreated');
          addGlow($('.Page_dateCreated'));
        }

        if(inputDateModified) {
          inputDateModified.replaceAll('.Page_dateModified');
          addGlow($('.Page_dateModified'));
        }

        if(inputDescription) {
          inputDescription.replaceAll('.Page_description');
          addGlow($('.Page_description'));
        }

        if(inputFeatures) {
          inputFeatures.replaceAll('.Page_features');
          addGlow($('.Page_features'));
        }

        if(inputHeight) {
          inputHeight.replaceAll('.Page_height');
          addGlow($('.Page_height'));
        }

        if(inputLocation) {
          inputLocation.replaceAll('.Page_location');
          addGlow($('.Page_location'));
        }

        if(inputName) {
          inputName.replaceAll('.Page_name');
          addGlow($('.Page_name'));
        }

        if(inputOwner) {
          inputOwner.replaceAll('.Page_owner');
          addGlow($('.Page_owner'));
        }

        if(inputRefOffStreetParking) {
          inputRefOffStreetParking.replaceAll('.Page_refOffStreetParking');
          addGlow($('.Page_refOffStreetParking'));
        }

        if(inputSeeAlso) {
          inputSeeAlso.replaceAll('.Page_seeAlso');
          addGlow($('.Page_seeAlso'));
        }

        if(inputSlope) {
          inputSlope.replaceAll('.Page_slope');
          addGlow($('.Page_slope'));
        }

        if(inputSource) {
          inputSource.replaceAll('.Page_source');
          addGlow($('.Page_source'));
        }

        if(inputWidth) {
          inputWidth.replaceAll('.Page_width');
          addGlow($('.Page_width'));
        }

        if(inputPk) {
          inputPk.replaceAll('.Page_pk');
          addGlow($('.Page_pk'));
        }

        if(inputInheritPk) {
          inputInheritPk.replaceAll('.Page_inheritPk');
          addGlow($('.Page_inheritPk'));
        }

        if(inputClassCanonicalName) {
          inputClassCanonicalName.replaceAll('.Page_classCanonicalName');
          addGlow($('.Page_classCanonicalName'));
        }

        if(inputClassSimpleName) {
          inputClassSimpleName.replaceAll('.Page_classSimpleName');
          addGlow($('.Page_classSimpleName'));
        }

        if(inputClassCanonicalNames) {
          inputClassCanonicalNames.replaceAll('.Page_classCanonicalNames');
          addGlow($('.Page_classCanonicalNames'));
        }

        if(inputSessionId) {
          inputSessionId.replaceAll('.Page_sessionId');
          addGlow($('.Page_sessionId'));
        }

        if(inputUserKey) {
          inputUserKey.replaceAll('.Page_userKey');
          addGlow($('.Page_userKey'));
        }

        if(inputSaves) {
          inputSaves.replaceAll('.Page_saves');
          addGlow($('.Page_saves'));
        }

        if(inputObjectTitle) {
          inputObjectTitle.replaceAll('.Page_objectTitle');
          addGlow($('.Page_objectTitle'));
        }

        if(inputPageUrlPk) {
          inputPageUrlPk.replaceAll('.Page_pageUrlPk');
          addGlow($('.Page_pageUrlPk'));
        }

        if(inputPageUrlApi) {
          inputPageUrlApi.replaceAll('.Page_pageUrlApi');
          addGlow($('.Page_pageUrlApi'));
        }

        if(inputId) {
          inputId.replaceAll('.Page_id');
          addGlow($('.Page_id'));
        }

        if(inputObjectSuggest) {
          inputObjectSuggest.replaceAll('.Page_objectSuggest');
          addGlow($('.Page_objectSuggest'));
        }

        if(inputObjectText) {
          inputObjectText.replaceAll('.Page_objectText');
          addGlow($('.Page_objectText'));
        }

        if(inputPageUrlId) {
          inputPageUrlId.replaceAll('.Page_pageUrlId');
          addGlow($('.Page_pageUrlId'));
        }

        pageGraphParkingAccess();
    });
  }
}

function pageGraphParkingAccess(apiRequest) {
  var r = $('.pageForm .pageResponse').val();
  if(r) {
    var json = JSON.parse(r);
    if(json['facetCounts']) {
      var facetCounts = json.facetCounts;
      if(facetCounts['facetPivot'] && facetCounts['facetRanges']) {
        var numPivots = json.responseHeader.params['facet.pivot'].split(',').length;
        var range = facetCounts.facetRanges.ranges[Object.keys(facetCounts.facetRanges.ranges)[0]];
        var rangeName;
        var rangeVar;
        var rangeVarFq;
        var rangeCounts;
        var rangeVals;
        if(range) {
          rangeName = range.name;
          rangeVar = rangeName.substring(0, rangeName.indexOf('_'));
          rangeVarFq = window.varsFq[rangeVar];
          rangeCounts = range.counts;
          rangeVals = Object.keys(rangeCounts).map(key => key);
        }
        var pivot1Name = Object.keys(facetCounts.facetPivot.pivotMap)[0];
        var pivot1VarIndexed = pivot1Name;
        if(pivot1VarIndexed.includes(','))
          pivot1VarIndexed = pivot1VarIndexed.substring(0, pivot1VarIndexed.indexOf(','));
        var pivot1VarObj = Object.values(window.varsFq).find(o => o.varIndexed === pivot1VarIndexed);
        var pivot1VarFq = pivot1VarObj ? pivot1VarObj.var : 'classSimpleName';
        var pivot1Map = facetCounts.facetPivot.pivotMap[pivot1Name].pivotMap;
        var pivot1Vals = Object.keys(pivot1Map);
        var data = [];
        var layout = {};
        if(range) {
          layout['title'] = 'ParkingAccesss';
          layout['xaxis'] = {
            title: rangeVarFq.displayName
          }
          if(pivot1Vals.length > 0 && pivot1Map[pivot1Vals[0]].pivotMap && Object.keys(pivot1Map[pivot1Vals[0]].pivotMap).length > 0) {
            var pivot2VarIndexed = pivot1Map[pivot1Vals[0]].pivotMap[Object.keys(pivot1Map[pivot1Vals[0]].pivotMap)[0]].field;
            var pivot2VarObj = Object.values(window.varsFq).find(o => o.varIndexed === pivot2VarIndexed);
            var pivot2VarFq = pivot2VarObj ? pivot2VarObj.var : 'classSimpleName';
            layout['yaxis'] = {
              title: pivot2VarObj.displayName
            }
            pivot1Vals.forEach((pivot1Val) => {
              var pivot1 = pivot1Map[pivot1Val];
              var pivot1Counts = pivot1.ranges[rangeName].counts;
              var pivot2Map = pivot1.pivotMap;
              var trace = {};
              var facetField;
              trace['showlegend'] = true;
              trace['mode'] = 'lines+markers';
              trace['name'] = pivot1Val;
              trace['x'] = Object.keys(pivot1Counts).map(key => key);
              if(pivot2Map) {
                var xs = [];
                var ys = [];
                var pivot2Vals = Object.keys(pivot2Map);
                pivot2Vals.forEach((pivot2Val) => {
                  var pivot2 = pivot2Map[pivot2Val];
                  var pivot2Counts = pivot2.ranges[rangeName].counts;
                  Object.entries(pivot2Counts).forEach(([key, count]) => {
                    xs.push(key);
                    ys.push(parseFloat(pivot2Val));
                  });
                });
                trace['y'] = ys;
                trace['x'] = xs;
              } else {
                trace['x'] = Object.keys(pivot1Counts).map(key => key);
                trace['y'] = Object.entries(pivot1Counts).map(([key, count]) => count);
              }
              data.push(trace);
            });
          } else {
            layout['yaxis'] = {
              title: pivot1VarObj.displayName
            }
            pivot1Vals.forEach((pivot1Val) => {
              var pivot1 = pivot1Map[pivot1Val];
              var pivot1Counts = pivot1.ranges[rangeName].counts;
              var pivot2Map = pivot1.pivotMap;
              var trace = {};
              var facetField;
              trace['showlegend'] = true;
              trace['mode'] = 'lines+markers';
              trace['name'] = pivot1Val;
              if(window.varsRange[window.defaultRangeVar].classSimpleName == 'ZonedDateTime') {
                trace['x'] = Object.keys(pivot1Counts).map(key => moment.tz(key, Intl.DateTimeFormat().resolvedOptions().timeZone).format('YYYY-MM-DDTHH:mm:ss.SSSS'));
              } else {
                trace['x'] = Object.keys(pivot1Counts).map(key => key);
              }
              trace['y'] = Object.entries(pivot1Counts).map(([key, count]) => count);
              data.push(trace);
            });
          }
        }
        Plotly.react('htmBodyGraphBaseModelPage', data, layout);
      }
    }

    // Graph Location
    window.mapLayers = {};
    function onEachFeature(feature, layer) {
      let popupContent = htmTooltipParkingAccess(feature, layer);
      layer.bindPopup(popupContent);
      window.mapLayers[feature.properties.id] = layer._leaflet_id;
    };
    if(window.mapParkingAccess) {
      window.geoJSONLayerGroupParkingAccess.clearLayers();
      $.each( window.listParkingAccess, function(index, parkingAccess) {
        if(parkingAccess.areaServed) {
          var shapes = [];
          if(Array.isArray(parkingAccess.areaServed))
            shapes = shapes.concat(parkingAccess.areaServed);
          else
            shapes.push(parkingAccess.areaServed);
          shapes.forEach(function(shape, index) {
            var features = [{
              "type": "Feature"
              , "properties": parkingAccess
              , "geometry": shape
              , "index": index
            }];
            var layer = L.geoJSON(features, {
              onEachFeature: onEachFeature
              , style: jsStyleParkingAccess
              , pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, jsStyleParkingAccess(feature));
              }
            });
            window.geoJSONLayerGroupParkingAccess.addLayer(layer);
          });
        }
      });
    } else {
      window.mapParkingAccess = L.map('htmBodyGraphLocationParkingAccessPage');
      var data = [];
      var layout = {};
      layout['showlegend'] = true;
      layout['dragmode'] = 'zoom';
      layout['uirevision'] = 'true';
      var legend = L.control({position: 'bottomright'});
      legend.onAdd = jsLegendParkingAccess;
      //legend.addTo(window.mapParkingAccess);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(window.mapParkingAccess);

      if(window['DEFAULT_MAP_LOCATION'] && window['DEFAULT_MAP_ZOOM'])
        window.mapParkingAccess.setView([window['DEFAULT_MAP_LOCATION']['lat'], window['DEFAULT_MAP_LOCATION']['lon']], window['DEFAULT_MAP_ZOOM']);
      else if(window['DEFAULT_MAP_ZOOM'])
        window.mapParkingAccess.setView(null, window['DEFAULT_MAP_ZOOM']);
      else if(window['DEFAULT_MAP_LOCATION'])
        window.mapParkingAccess.setView([window['DEFAULT_MAP_LOCATION']['lat'], window['DEFAULT_MAP_LOCATION']['lon']]);

      layout['margin'] = { r: 0, t: 0, b: 0, l: 0 };
      window.geoJSONLayerGroupParkingAccess = L.geoJSON().addTo(window.mapParkingAccess);
      $.each( window.listParkingAccess, function(index, parkingAccess) {
        if(parkingAccess.areaServed) {
          var shapes = [];
          if(Array.isArray(parkingAccess.areaServed))
            shapes = shapes.concat(parkingAccess.areaServed);
          else
            shapes.push(parkingAccess.areaServed);
          shapes.forEach(shape => {
            var features = [{
              "type": "Feature"
              , "properties": parkingAccess
              , "geometry": shape
              , "index": index
            }];
            var layer = L.geoJSON(features, {
              onEachFeature: onEachFeature
              , style: jsStyleParkingAccess
              , pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, jsStyleParkingAccess(feature));
              }
            });
            window.geoJSONLayerGroupParkingAccess.addLayer(layer);
          });
        }
      });
      window.mapParkingAccess.on('popupopen', function(e) {
        var feature = e.popup._source.feature;
        jsTooltipParkingAccess(e, feature);
      });
    }
  }
}

function animateStats() {
  $('#pageSearchVal-fqParkingAccess_time').text('');
  searchPage('ParkingAccess', function() {
    let speedRate = parseFloat($('#animateStatsSpeed').val()) * 1000;
    let xStep = parseFloat($('#animateStatsStep').val());
    let xMin = parseFloat($('#animateStatsMin').val());
    let xMax = parseFloat($('#animateStatsMax').val());
    let x = xMin;

    let animateInterval = window.setInterval(() => {
      x = x + xStep;
      if (x > xMax || x < 0) {
        clearInterval(animateInterval);
      }
      $('#fqParkingAccess_time').val(x);
      $('#fqParkingAccess_time').change();
      searchPage('ParkingAccess');
    }, speedRate);
  });
}
