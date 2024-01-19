
// Search //

async function searchCrowdFlowObserved($formFilters, success, error) {
  var filters = searchCrowdFlowObservedFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, textStatus, errorThrown ) {};

  searchCrowdFlowObservedVals(filters, success, error);
}

function searchCrowdFlowObservedFilters($formFilters) {
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

    var filterEntityId = $formFilters.find('.valueEntityId').val();
    if(filterEntityId != null && filterEntityId !== '')
      filters.push({ name: 'fq', value: 'entityId:' + filterEntityId });

    var filterCustomTrafficLightId = $formFilters.find('.valueCustomTrafficLightId').val();
    if(filterCustomTrafficLightId != null && filterCustomTrafficLightId !== '')
      filters.push({ name: 'fq', value: 'customTrafficLightId:' + filterCustomTrafficLightId });

    var filterTrafficSimulationId = $formFilters.find('.valueTrafficSimulationId').val();
    if(filterTrafficSimulationId != null && filterTrafficSimulationId !== '')
      filters.push({ name: 'fq', value: 'trafficSimulationId:' + filterTrafficSimulationId });

    var filterLocation = $formFilters.find('.valueLocation').val();
    if(filterLocation != null && filterLocation !== '')
      filters.push({ name: 'fq', value: 'location:' + filterLocation });

    var filterAreaServed = $formFilters.find('.valueAreaServed').val();
    if(filterAreaServed != null && filterAreaServed !== '')
      filters.push({ name: 'fq', value: 'areaServed:' + filterAreaServed });

    var filterDateObserved = $formFilters.find('.valueDateObserved').val();
    if(filterDateObserved != null && filterDateObserved !== '')
      filters.push({ name: 'fq', value: 'dateObserved:' + filterDateObserved });

    var filterDateObservedFrom = $formFilters.find('.valueDateObservedFrom').val();
    if(filterDateObservedFrom != null && filterDateObservedFrom !== '')
      filters.push({ name: 'fq', value: 'dateObservedFrom:' + filterDateObservedFrom });

    var filterDateObservedTo = $formFilters.find('.valueDateObservedTo').val();
    if(filterDateObservedTo != null && filterDateObservedTo !== '')
      filters.push({ name: 'fq', value: 'dateObservedTo:' + filterDateObservedTo });

    var filterColor = $formFilters.find('.valueColor').val();
    if(filterColor != null && filterColor !== '')
      filters.push({ name: 'fq', value: 'color:' + filterColor });

    var filterDescription = $formFilters.find('.valueDescription').val();
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var filterName = $formFilters.find('.valueName').val();
    if(filterName != null && filterName !== '')
      filters.push({ name: 'fq', value: 'name:' + filterName });

    var filterDirection = $formFilters.find('.valueDirection').val();
    if(filterDirection != null && filterDirection !== '')
      filters.push({ name: 'fq', value: 'direction:' + filterDirection });

    var filterOccupancy = $formFilters.find('.valueOccupancy').val();
    if(filterOccupancy != null && filterOccupancy !== '')
      filters.push({ name: 'fq', value: 'occupancy:' + filterOccupancy });

    var filterPeopleCount = $formFilters.find('.valuePeopleCount').val();
    if(filterPeopleCount != null && filterPeopleCount !== '')
      filters.push({ name: 'fq', value: 'peopleCount:' + filterPeopleCount });

    var filterRefRoadSegment = $formFilters.find('.valueRefRoadSegment').val();
    if(filterRefRoadSegment != null && filterRefRoadSegment !== '')
      filters.push({ name: 'fq', value: 'refRoadSegment:' + filterRefRoadSegment });

    var filterSeeAlso = $formFilters.find('.valueSeeAlso').val();
    if(filterSeeAlso != null && filterSeeAlso !== '')
      filters.push({ name: 'fq', value: 'seeAlso:' + filterSeeAlso });

    var filterOwner = $formFilters.find('.valueOwner').val();
    if(filterOwner != null && filterOwner !== '')
      filters.push({ name: 'fq', value: 'owner:' + filterOwner });

    var filterSource = $formFilters.find('.valueSource').val();
    if(filterSource != null && filterSource !== '')
      filters.push({ name: 'fq', value: 'source:' + filterSource });

    var filterWalkingAreaId = $formFilters.find('.valueWalkingAreaId').val();
    if(filterWalkingAreaId != null && filterWalkingAreaId !== '')
      filters.push({ name: 'fq', value: 'walkingAreaId:' + filterWalkingAreaId });

    var filterAlternateName = $formFilters.find('.valueAlternateName').val();
    if(filterAlternateName != null && filterAlternateName !== '')
      filters.push({ name: 'fq', value: 'alternateName:' + filterAlternateName });

    var filterAverageCrowdSpeed = $formFilters.find('.valueAverageCrowdSpeed').val();
    if(filterAverageCrowdSpeed != null && filterAverageCrowdSpeed !== '')
      filters.push({ name: 'fq', value: 'averageCrowdSpeed:' + filterAverageCrowdSpeed });

    var filterDataProvider = $formFilters.find('.valueDataProvider').val();
    if(filterDataProvider != null && filterDataProvider !== '')
      filters.push({ name: 'fq', value: 'dataProvider:' + filterDataProvider });

    var filterAverageHeadwayTime = $formFilters.find('.valueAverageHeadwayTime').val();
    if(filterAverageHeadwayTime != null && filterAverageHeadwayTime !== '')
      filters.push({ name: 'fq', value: 'averageHeadwayTime:' + filterAverageHeadwayTime });

    var $filterCongestedCheckbox = $formFilters.find('input.valueCongested[type = "checkbox"]');
    var $filterCongestedSelect = $formFilters.find('select.valueCongested');
    var filterCongested = $filterCongestedSelect.length ? $filterCongestedSelect.val() : $filterCongestedCheckbox.prop('checked');
    var filterCongestedSelectVal = $formFilters.find('select.filterCongested').val();
    var filterCongested = null;
    if(filterCongestedSelectVal !== '')
      filterCongested = filterCongestedSelectVal == 'true';
    if(filterCongested != null && filterCongested === true)
      filters.push({ name: 'fq', value: 'congested:' + filterCongested });

    var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.find('.valueObjectText').val();
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
    if(filterPageUrlPk != null && filterPageUrlPk !== '')
      filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

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

    var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
    if(filterPageUrlId != null && filterPageUrlId !== '')
      filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

    var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
    if(filterPageUrlApi != null && filterPageUrlApi !== '')
      filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

    var filterId = $formFilters.find('.valueId').val();
    if(filterId != null && filterId !== '')
      filters.push({ name: 'fq', value: 'id:' + filterId });

    var filterEntityShortId = $formFilters.find('.valueEntityShortId').val();
    if(filterEntityShortId != null && filterEntityShortId !== '')
      filters.push({ name: 'fq', value: 'entityShortId:' + filterEntityShortId });

    var filterAreaServedColors = $formFilters.find('.valueAreaServedColors').val();
    if(filterAreaServedColors != null && filterAreaServedColors !== '')
      filters.push({ name: 'fq', value: 'areaServedColors:' + filterAreaServedColors });

    var filterAreaServedTitles = $formFilters.find('.valueAreaServedTitles').val();
    if(filterAreaServedTitles != null && filterAreaServedTitles !== '')
      filters.push({ name: 'fq', value: 'areaServedTitles:' + filterAreaServedTitles });

    var filterAreaServedLinks = $formFilters.find('.valueAreaServedLinks').val();
    if(filterAreaServedLinks != null && filterAreaServedLinks !== '')
      filters.push({ name: 'fq', value: 'areaServedLinks:' + filterAreaServedLinks });

    var filterDateCreated = $formFilters.find('.valueDateCreated').val();
    if(filterDateCreated != null && filterDateCreated !== '')
      filters.push({ name: 'fq', value: 'dateCreated:' + filterDateCreated });

    var filterDateModified = $formFilters.find('.valueDateModified').val();
    if(filterDateModified != null && filterDateModified !== '')
      filters.push({ name: 'fq', value: 'dateModified:' + filterDateModified });
  }
  return filters;
}

function searchCrowdFlowObservedVals(filters, success, error) {


  $.ajax({
    url: '/api/crowd-flow-observed?' + $.param(filters)
    , dataType: 'json'
    , type: 'GET'
    , contentType: 'application/json; charset=utf-8'
    , success: success
    , error: error
  });
}

function suggestCrowdFlowObservedObjectSuggest($formFilters, $list) {
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
  searchCrowdFlowObservedVals($formFilters, success, error);
}

// GET //

async function getCrowdFlowObserved(pk) {
  $.ajax({
    url: '/api/crowd-flow-observed/' + id
    , dataType: 'json'
    , type: 'GET'
    , contentType: 'application/json; charset=utf-8'
    , success: success
    , error: error
  });
}

// PATCH //

async function patchCrowdFlowObserved($formFilters, $formValues, pk, success, error) {
  var filters = patchCrowdFlowObservedFilters($formFilters);

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

  var valueEntityId = $formValues.find('.valueEntityId').val();
  var removeEntityId = $formValues.find('.removeEntityId').val() === 'true';
  var setEntityId = removeEntityId ? null : $formValues.find('.setEntityId').val();
  var addEntityId = $formValues.find('.addEntityId').val();
  if(removeEntityId || setEntityId != null && setEntityId !== '')
    vals['setEntityId'] = setEntityId;
  if(addEntityId != null && addEntityId !== '')
    vals['addEntityId'] = addEntityId;
  var removeEntityId = $formValues.find('.removeEntityId').val();
  if(removeEntityId != null && removeEntityId !== '')
    vals['removeEntityId'] = removeEntityId;

  var valueCustomTrafficLightId = $formValues.find('.valueCustomTrafficLightId').val();
  var removeCustomTrafficLightId = $formValues.find('.removeCustomTrafficLightId').val() === 'true';
  var setCustomTrafficLightId = removeCustomTrafficLightId ? null : $formValues.find('.setCustomTrafficLightId').val();
  var addCustomTrafficLightId = $formValues.find('.addCustomTrafficLightId').val();
  if(removeCustomTrafficLightId || setCustomTrafficLightId != null && setCustomTrafficLightId !== '')
    vals['setCustomTrafficLightId'] = setCustomTrafficLightId;
  if(addCustomTrafficLightId != null && addCustomTrafficLightId !== '')
    vals['addCustomTrafficLightId'] = addCustomTrafficLightId;
  var removeCustomTrafficLightId = $formValues.find('.removeCustomTrafficLightId').val();
  if(removeCustomTrafficLightId != null && removeCustomTrafficLightId !== '')
    vals['removeCustomTrafficLightId'] = removeCustomTrafficLightId;

  var valueTrafficSimulationId = $formValues.find('.valueTrafficSimulationId').val();
  var removeTrafficSimulationId = $formValues.find('.removeTrafficSimulationId').val() === 'true';
  var setTrafficSimulationId = removeTrafficSimulationId ? null : $formValues.find('.setTrafficSimulationId').val();
  var addTrafficSimulationId = $formValues.find('.addTrafficSimulationId').val();
  if(removeTrafficSimulationId || setTrafficSimulationId != null && setTrafficSimulationId !== '')
    vals['setTrafficSimulationId'] = setTrafficSimulationId;
  if(addTrafficSimulationId != null && addTrafficSimulationId !== '')
    vals['addTrafficSimulationId'] = addTrafficSimulationId;
  var removeTrafficSimulationId = $formValues.find('.removeTrafficSimulationId').val();
  if(removeTrafficSimulationId != null && removeTrafficSimulationId !== '')
    vals['removeTrafficSimulationId'] = removeTrafficSimulationId;

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

  var valueDateObserved = $formValues.find('.valueDateObserved').val();
  var removeDateObserved = $formValues.find('.removeDateObserved').val() === 'true';
  var setDateObserved = removeDateObserved ? null : $formValues.find('.setDateObserved').val();
  var addDateObserved = $formValues.find('.addDateObserved').val();
  if(removeDateObserved || setDateObserved != null && setDateObserved !== '')
    vals['setDateObserved'] = setDateObserved;
  if(addDateObserved != null && addDateObserved !== '')
    vals['addDateObserved'] = addDateObserved;
  var removeDateObserved = $formValues.find('.removeDateObserved').val();
  if(removeDateObserved != null && removeDateObserved !== '')
    vals['removeDateObserved'] = removeDateObserved;

  var valueDateObservedFrom = $formValues.find('.valueDateObservedFrom').val();
  var removeDateObservedFrom = $formValues.find('.removeDateObservedFrom').val() === 'true';
  var setDateObservedFrom = removeDateObservedFrom ? null : $formValues.find('.setDateObservedFrom').val();
  var addDateObservedFrom = $formValues.find('.addDateObservedFrom').val();
  if(removeDateObservedFrom || setDateObservedFrom != null && setDateObservedFrom !== '')
    vals['setDateObservedFrom'] = setDateObservedFrom;
  if(addDateObservedFrom != null && addDateObservedFrom !== '')
    vals['addDateObservedFrom'] = addDateObservedFrom;
  var removeDateObservedFrom = $formValues.find('.removeDateObservedFrom').val();
  if(removeDateObservedFrom != null && removeDateObservedFrom !== '')
    vals['removeDateObservedFrom'] = removeDateObservedFrom;

  var valueDateObservedTo = $formValues.find('.valueDateObservedTo').val();
  var removeDateObservedTo = $formValues.find('.removeDateObservedTo').val() === 'true';
  var setDateObservedTo = removeDateObservedTo ? null : $formValues.find('.setDateObservedTo').val();
  var addDateObservedTo = $formValues.find('.addDateObservedTo').val();
  if(removeDateObservedTo || setDateObservedTo != null && setDateObservedTo !== '')
    vals['setDateObservedTo'] = setDateObservedTo;
  if(addDateObservedTo != null && addDateObservedTo !== '')
    vals['addDateObservedTo'] = addDateObservedTo;
  var removeDateObservedTo = $formValues.find('.removeDateObservedTo').val();
  if(removeDateObservedTo != null && removeDateObservedTo !== '')
    vals['removeDateObservedTo'] = removeDateObservedTo;

  var valueColor = $formValues.find('.valueColor').val();
  var removeColor = $formValues.find('.removeColor').val() === 'true';
  var setColor = removeColor ? null : $formValues.find('.setColor').val();
  var addColor = $formValues.find('.addColor').val();
  if(removeColor || setColor != null && setColor !== '')
    vals['setColor'] = setColor;
  if(addColor != null && addColor !== '')
    vals['addColor'] = addColor;
  var removeColor = $formValues.find('.removeColor').val();
  if(removeColor != null && removeColor !== '')
    vals['removeColor'] = removeColor;

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

  var valueDirection = $formValues.find('.valueDirection').val();
  var removeDirection = $formValues.find('.removeDirection').val() === 'true';
  var setDirection = removeDirection ? null : $formValues.find('.setDirection').val();
  var addDirection = $formValues.find('.addDirection').val();
  if(removeDirection || setDirection != null && setDirection !== '')
    vals['setDirection'] = setDirection;
  if(addDirection != null && addDirection !== '')
    vals['addDirection'] = addDirection;
  var removeDirection = $formValues.find('.removeDirection').val();
  if(removeDirection != null && removeDirection !== '')
    vals['removeDirection'] = removeDirection;

  var valueOccupancy = $formValues.find('.valueOccupancy').val();
  var removeOccupancy = $formValues.find('.removeOccupancy').val() === 'true';
  var setOccupancy = removeOccupancy ? null : $formValues.find('.setOccupancy').val();
  var addOccupancy = $formValues.find('.addOccupancy').val();
  if(removeOccupancy || setOccupancy != null && setOccupancy !== '')
    vals['setOccupancy'] = setOccupancy;
  if(addOccupancy != null && addOccupancy !== '')
    vals['addOccupancy'] = addOccupancy;
  var removeOccupancy = $formValues.find('.removeOccupancy').val();
  if(removeOccupancy != null && removeOccupancy !== '')
    vals['removeOccupancy'] = removeOccupancy;

  var valuePeopleCount = $formValues.find('.valuePeopleCount').val();
  var removePeopleCount = $formValues.find('.removePeopleCount').val() === 'true';
  var setPeopleCount = removePeopleCount ? null : $formValues.find('.setPeopleCount').val();
  var addPeopleCount = $formValues.find('.addPeopleCount').val();
  if(removePeopleCount || setPeopleCount != null && setPeopleCount !== '')
    vals['setPeopleCount'] = setPeopleCount;
  if(addPeopleCount != null && addPeopleCount !== '')
    vals['addPeopleCount'] = addPeopleCount;
  var removePeopleCount = $formValues.find('.removePeopleCount').val();
  if(removePeopleCount != null && removePeopleCount !== '')
    vals['removePeopleCount'] = removePeopleCount;

  var valueRefRoadSegment = $formValues.find('.valueRefRoadSegment').val();
  var removeRefRoadSegment = $formValues.find('.removeRefRoadSegment').val() === 'true';
  var setRefRoadSegment = removeRefRoadSegment ? null : $formValues.find('.setRefRoadSegment').val();
  var addRefRoadSegment = $formValues.find('.addRefRoadSegment').val();
  if(removeRefRoadSegment || setRefRoadSegment != null && setRefRoadSegment !== '')
    vals['setRefRoadSegment'] = JSON.parse(setRefRoadSegment);
  if(addRefRoadSegment != null && addRefRoadSegment !== '')
    vals['addRefRoadSegment'] = addRefRoadSegment;
  var removeRefRoadSegment = $formValues.find('.removeRefRoadSegment').val();
  if(removeRefRoadSegment != null && removeRefRoadSegment !== '')
    vals['removeRefRoadSegment'] = removeRefRoadSegment;

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

  var valueWalkingAreaId = $formValues.find('.valueWalkingAreaId').val();
  var removeWalkingAreaId = $formValues.find('.removeWalkingAreaId').val() === 'true';
  var setWalkingAreaId = removeWalkingAreaId ? null : $formValues.find('.setWalkingAreaId').val();
  var addWalkingAreaId = $formValues.find('.addWalkingAreaId').val();
  if(removeWalkingAreaId || setWalkingAreaId != null && setWalkingAreaId !== '')
    vals['setWalkingAreaId'] = setWalkingAreaId;
  if(addWalkingAreaId != null && addWalkingAreaId !== '')
    vals['addWalkingAreaId'] = addWalkingAreaId;
  var removeWalkingAreaId = $formValues.find('.removeWalkingAreaId').val();
  if(removeWalkingAreaId != null && removeWalkingAreaId !== '')
    vals['removeWalkingAreaId'] = removeWalkingAreaId;

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

  var valueAverageCrowdSpeed = $formValues.find('.valueAverageCrowdSpeed').val();
  var removeAverageCrowdSpeed = $formValues.find('.removeAverageCrowdSpeed').val() === 'true';
  var setAverageCrowdSpeed = removeAverageCrowdSpeed ? null : $formValues.find('.setAverageCrowdSpeed').val();
  var addAverageCrowdSpeed = $formValues.find('.addAverageCrowdSpeed').val();
  if(removeAverageCrowdSpeed || setAverageCrowdSpeed != null && setAverageCrowdSpeed !== '')
    vals['setAverageCrowdSpeed'] = setAverageCrowdSpeed;
  if(addAverageCrowdSpeed != null && addAverageCrowdSpeed !== '')
    vals['addAverageCrowdSpeed'] = addAverageCrowdSpeed;
  var removeAverageCrowdSpeed = $formValues.find('.removeAverageCrowdSpeed').val();
  if(removeAverageCrowdSpeed != null && removeAverageCrowdSpeed !== '')
    vals['removeAverageCrowdSpeed'] = removeAverageCrowdSpeed;

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

  var valueAverageHeadwayTime = $formValues.find('.valueAverageHeadwayTime').val();
  var removeAverageHeadwayTime = $formValues.find('.removeAverageHeadwayTime').val() === 'true';
  var setAverageHeadwayTime = removeAverageHeadwayTime ? null : $formValues.find('.setAverageHeadwayTime').val();
  var addAverageHeadwayTime = $formValues.find('.addAverageHeadwayTime').val();
  if(removeAverageHeadwayTime || setAverageHeadwayTime != null && setAverageHeadwayTime !== '')
    vals['setAverageHeadwayTime'] = setAverageHeadwayTime;
  if(addAverageHeadwayTime != null && addAverageHeadwayTime !== '')
    vals['addAverageHeadwayTime'] = addAverageHeadwayTime;
  var removeAverageHeadwayTime = $formValues.find('.removeAverageHeadwayTime').val();
  if(removeAverageHeadwayTime != null && removeAverageHeadwayTime !== '')
    vals['removeAverageHeadwayTime'] = removeAverageHeadwayTime;

  var valueCongested = $formValues.find('.valueCongested').val();
  var removeCongested = $formValues.find('.removeCongested').val() === 'true';
  var valueCongestedSelectVal = $formValues.find('select.setCongested').val();
  if(valueCongestedSelectVal != null && valueCongestedSelectVal !== '')
    valueCongested = valueCongestedSelectVal == 'true';
  var setCongested = removeCongested ? null : valueCongested;
  var addCongested = $formValues.find('.addCongested').prop('checked');
  if(removeCongested || setCongested != null && setCongested !== '')
    vals['setCongested'] = setCongested;
  if(addCongested != null && addCongested !== '')
    vals['addCongested'] = addCongested;
  var removeCongested = $formValues.find('.removeCongested').prop('checked');
  if(removeCongested != null && removeCongested !== '')
    vals['removeCongested'] = removeCongested;

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

  patchCrowdFlowObservedVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchCrowdFlowObservedFilters($formFilters) {
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

    var filterEntityId = $formFilters.find('.valueEntityId').val();
    if(filterEntityId != null && filterEntityId !== '')
      filters.push({ name: 'fq', value: 'entityId:' + filterEntityId });

    var filterCustomTrafficLightId = $formFilters.find('.valueCustomTrafficLightId').val();
    if(filterCustomTrafficLightId != null && filterCustomTrafficLightId !== '')
      filters.push({ name: 'fq', value: 'customTrafficLightId:' + filterCustomTrafficLightId });

    var filterTrafficSimulationId = $formFilters.find('.valueTrafficSimulationId').val();
    if(filterTrafficSimulationId != null && filterTrafficSimulationId !== '')
      filters.push({ name: 'fq', value: 'trafficSimulationId:' + filterTrafficSimulationId });

    var filterLocation = $formFilters.find('.valueLocation').val();
    if(filterLocation != null && filterLocation !== '')
      filters.push({ name: 'fq', value: 'location:' + filterLocation });

    var filterAreaServed = $formFilters.find('.valueAreaServed').val();
    if(filterAreaServed != null && filterAreaServed !== '')
      filters.push({ name: 'fq', value: 'areaServed:' + filterAreaServed });

    var filterDateObserved = $formFilters.find('.valueDateObserved').val();
    if(filterDateObserved != null && filterDateObserved !== '')
      filters.push({ name: 'fq', value: 'dateObserved:' + filterDateObserved });

    var filterDateObservedFrom = $formFilters.find('.valueDateObservedFrom').val();
    if(filterDateObservedFrom != null && filterDateObservedFrom !== '')
      filters.push({ name: 'fq', value: 'dateObservedFrom:' + filterDateObservedFrom });

    var filterDateObservedTo = $formFilters.find('.valueDateObservedTo').val();
    if(filterDateObservedTo != null && filterDateObservedTo !== '')
      filters.push({ name: 'fq', value: 'dateObservedTo:' + filterDateObservedTo });

    var filterColor = $formFilters.find('.valueColor').val();
    if(filterColor != null && filterColor !== '')
      filters.push({ name: 'fq', value: 'color:' + filterColor });

    var filterDescription = $formFilters.find('.valueDescription').val();
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var filterName = $formFilters.find('.valueName').val();
    if(filterName != null && filterName !== '')
      filters.push({ name: 'fq', value: 'name:' + filterName });

    var filterDirection = $formFilters.find('.valueDirection').val();
    if(filterDirection != null && filterDirection !== '')
      filters.push({ name: 'fq', value: 'direction:' + filterDirection });

    var filterOccupancy = $formFilters.find('.valueOccupancy').val();
    if(filterOccupancy != null && filterOccupancy !== '')
      filters.push({ name: 'fq', value: 'occupancy:' + filterOccupancy });

    var filterPeopleCount = $formFilters.find('.valuePeopleCount').val();
    if(filterPeopleCount != null && filterPeopleCount !== '')
      filters.push({ name: 'fq', value: 'peopleCount:' + filterPeopleCount });

    var filterRefRoadSegment = $formFilters.find('.valueRefRoadSegment').val();
    if(filterRefRoadSegment != null && filterRefRoadSegment !== '')
      filters.push({ name: 'fq', value: 'refRoadSegment:' + filterRefRoadSegment });

    var filterSeeAlso = $formFilters.find('.valueSeeAlso').val();
    if(filterSeeAlso != null && filterSeeAlso !== '')
      filters.push({ name: 'fq', value: 'seeAlso:' + filterSeeAlso });

    var filterOwner = $formFilters.find('.valueOwner').val();
    if(filterOwner != null && filterOwner !== '')
      filters.push({ name: 'fq', value: 'owner:' + filterOwner });

    var filterSource = $formFilters.find('.valueSource').val();
    if(filterSource != null && filterSource !== '')
      filters.push({ name: 'fq', value: 'source:' + filterSource });

    var filterWalkingAreaId = $formFilters.find('.valueWalkingAreaId').val();
    if(filterWalkingAreaId != null && filterWalkingAreaId !== '')
      filters.push({ name: 'fq', value: 'walkingAreaId:' + filterWalkingAreaId });

    var filterAlternateName = $formFilters.find('.valueAlternateName').val();
    if(filterAlternateName != null && filterAlternateName !== '')
      filters.push({ name: 'fq', value: 'alternateName:' + filterAlternateName });

    var filterAverageCrowdSpeed = $formFilters.find('.valueAverageCrowdSpeed').val();
    if(filterAverageCrowdSpeed != null && filterAverageCrowdSpeed !== '')
      filters.push({ name: 'fq', value: 'averageCrowdSpeed:' + filterAverageCrowdSpeed });

    var filterDataProvider = $formFilters.find('.valueDataProvider').val();
    if(filterDataProvider != null && filterDataProvider !== '')
      filters.push({ name: 'fq', value: 'dataProvider:' + filterDataProvider });

    var filterAverageHeadwayTime = $formFilters.find('.valueAverageHeadwayTime').val();
    if(filterAverageHeadwayTime != null && filterAverageHeadwayTime !== '')
      filters.push({ name: 'fq', value: 'averageHeadwayTime:' + filterAverageHeadwayTime });

    var $filterCongestedCheckbox = $formFilters.find('input.valueCongested[type = "checkbox"]');
    var $filterCongestedSelect = $formFilters.find('select.valueCongested');
    var filterCongested = $filterCongestedSelect.length ? $filterCongestedSelect.val() : $filterCongestedCheckbox.prop('checked');
    var filterCongestedSelectVal = $formFilters.find('select.filterCongested').val();
    var filterCongested = null;
    if(filterCongestedSelectVal !== '')
      filterCongested = filterCongestedSelectVal == 'true';
    if(filterCongested != null && filterCongested === true)
      filters.push({ name: 'fq', value: 'congested:' + filterCongested });

    var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.find('.valueObjectText').val();
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
    if(filterPageUrlPk != null && filterPageUrlPk !== '')
      filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

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

    var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
    if(filterPageUrlId != null && filterPageUrlId !== '')
      filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

    var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
    if(filterPageUrlApi != null && filterPageUrlApi !== '')
      filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

    var filterId = $formFilters.find('.valueId').val();
    if(filterId != null && filterId !== '')
      filters.push({ name: 'fq', value: 'id:' + filterId });

    var filterEntityShortId = $formFilters.find('.valueEntityShortId').val();
    if(filterEntityShortId != null && filterEntityShortId !== '')
      filters.push({ name: 'fq', value: 'entityShortId:' + filterEntityShortId });

    var filterAreaServedColors = $formFilters.find('.valueAreaServedColors').val();
    if(filterAreaServedColors != null && filterAreaServedColors !== '')
      filters.push({ name: 'fq', value: 'areaServedColors:' + filterAreaServedColors });

    var filterAreaServedTitles = $formFilters.find('.valueAreaServedTitles').val();
    if(filterAreaServedTitles != null && filterAreaServedTitles !== '')
      filters.push({ name: 'fq', value: 'areaServedTitles:' + filterAreaServedTitles });

    var filterAreaServedLinks = $formFilters.find('.valueAreaServedLinks').val();
    if(filterAreaServedLinks != null && filterAreaServedLinks !== '')
      filters.push({ name: 'fq', value: 'areaServedLinks:' + filterAreaServedLinks });

    var filterDateCreated = $formFilters.find('.valueDateCreated').val();
    if(filterDateCreated != null && filterDateCreated !== '')
      filters.push({ name: 'fq', value: 'dateCreated:' + filterDateCreated });

    var filterDateModified = $formFilters.find('.valueDateModified').val();
    if(filterDateModified != null && filterDateModified !== '')
      filters.push({ name: 'fq', value: 'dateModified:' + filterDateModified });
  }
  return filters;
}

function patchCrowdFlowObservedVal(filters, v, val, success, error) {
  var vals = {};
  vals[v] = val;
  patchCrowdFlowObservedVals(filters, vals, success, error);
}

function patchCrowdFlowObservedVals(filters, vals, success, error) {
  $.ajax({
    url: '/api/crowd-flow-observed?' + $.param(filters)
    , dataType: 'json'
    , type: 'PATCH'
    , contentType: 'application/json; charset=utf-8'
    , data: JSON.stringify(vals)
    , success: success
    , error: error
  });
}

// POST //

async function postCrowdFlowObserved($formValues, success, error) {
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

  var valueEntityId = $formValues.find('.valueEntityId').val();
  if(valueEntityId != null && valueEntityId !== '')
    vals['entityId'] = valueEntityId;

  var valueCustomTrafficLightId = $formValues.find('.valueCustomTrafficLightId').val();
  if(valueCustomTrafficLightId != null && valueCustomTrafficLightId !== '')
    vals['customTrafficLightId'] = valueCustomTrafficLightId;

  var valueTrafficSimulationId = $formValues.find('.valueTrafficSimulationId').val();
  if(valueTrafficSimulationId != null && valueTrafficSimulationId !== '')
    vals['trafficSimulationId'] = valueTrafficSimulationId;

  var valueLocation = $formValues.find('.valueLocation').val();
  if(valueLocation != null && valueLocation !== '')
    vals['location'] = JSON.parse(valueLocation);

  var valueAreaServed = $formValues.find('.valueAreaServed').val();
  if(valueAreaServed != null && valueAreaServed !== '')
    vals['areaServed'] = JSON.parse(valueAreaServed);

  var valueDateObserved = $formValues.find('.valueDateObserved').val();
  if(valueDateObserved != null && valueDateObserved !== '')
    vals['dateObserved'] = valueDateObserved;

  var valueDateObservedFrom = $formValues.find('.valueDateObservedFrom').val();
  if(valueDateObservedFrom != null && valueDateObservedFrom !== '')
    vals['dateObservedFrom'] = valueDateObservedFrom;

  var valueDateObservedTo = $formValues.find('.valueDateObservedTo').val();
  if(valueDateObservedTo != null && valueDateObservedTo !== '')
    vals['dateObservedTo'] = valueDateObservedTo;

  var valueColor = $formValues.find('.valueColor').val();
  if(valueColor != null && valueColor !== '')
    vals['color'] = valueColor;

  var valueDescription = $formValues.find('.valueDescription').val();
  if(valueDescription != null && valueDescription !== '')
    vals['description'] = valueDescription;

  var valueName = $formValues.find('.valueName').val();
  if(valueName != null && valueName !== '')
    vals['name'] = valueName;

  var valueDirection = $formValues.find('.valueDirection').val();
  if(valueDirection != null && valueDirection !== '')
    vals['direction'] = valueDirection;

  var valueOccupancy = $formValues.find('.valueOccupancy').val();
  if(valueOccupancy != null && valueOccupancy !== '')
    vals['occupancy'] = valueOccupancy;

  var valuePeopleCount = $formValues.find('.valuePeopleCount').val();
  if(valuePeopleCount != null && valuePeopleCount !== '')
    vals['peopleCount'] = valuePeopleCount;

  var valueRefRoadSegment = $formValues.find('.valueRefRoadSegment').val();
  if(valueRefRoadSegment != null && valueRefRoadSegment !== '')
    vals['refRoadSegment'] = JSON.parse(valueRefRoadSegment);

  var valueSeeAlso = $formValues.find('.valueSeeAlso').val();
  if(valueSeeAlso != null && valueSeeAlso !== '')
    vals['seeAlso'] = JSON.parse(valueSeeAlso);

  var valueOwner = $formValues.find('.valueOwner').val();
  if(valueOwner != null && valueOwner !== '')
    vals['owner'] = JSON.parse(valueOwner);

  var valueSource = $formValues.find('.valueSource').val();
  if(valueSource != null && valueSource !== '')
    vals['source'] = valueSource;

  var valueWalkingAreaId = $formValues.find('.valueWalkingAreaId').val();
  if(valueWalkingAreaId != null && valueWalkingAreaId !== '')
    vals['walkingAreaId'] = valueWalkingAreaId;

  var valueAlternateName = $formValues.find('.valueAlternateName').val();
  if(valueAlternateName != null && valueAlternateName !== '')
    vals['alternateName'] = valueAlternateName;

  var valueAverageCrowdSpeed = $formValues.find('.valueAverageCrowdSpeed').val();
  if(valueAverageCrowdSpeed != null && valueAverageCrowdSpeed !== '')
    vals['averageCrowdSpeed'] = valueAverageCrowdSpeed;

  var valueDataProvider = $formValues.find('.valueDataProvider').val();
  if(valueDataProvider != null && valueDataProvider !== '')
    vals['dataProvider'] = valueDataProvider;

  var valueAverageHeadwayTime = $formValues.find('.valueAverageHeadwayTime').val();
  if(valueAverageHeadwayTime != null && valueAverageHeadwayTime !== '')
    vals['averageHeadwayTime'] = valueAverageHeadwayTime;

  var valueCongested = $formValues.find('.valueCongested').val();
  if(valueCongested != null && valueCongested !== '')
    vals['congested'] = valueCongested == 'true';

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

  var valueDateCreated = $formValues.find('.valueDateCreated').val();
  if(valueDateCreated != null && valueDateCreated !== '')
    vals['dateCreated'] = valueDateCreated;

  var valueDateModified = $formValues.find('.valueDateModified').val();
  if(valueDateModified != null && valueDateModified !== '')
    vals['dateModified'] = valueDateModified;

  $.ajax({
    url: '/api/crowd-flow-observed'
    , dataType: 'json'
    , type: 'POST'
    , contentType: 'application/json; charset=utf-8'
    , data: JSON.stringify(vals)
    , success: success
    , error: error
  });
}

function postCrowdFlowObservedVals(vals, success, error) {
  $.ajax({
    url: '/api/crowd-flow-observed'
    , dataType: 'json'
    , type: 'POST'
    , contentType: 'application/json; charset=utf-8'
    , data: JSON.stringify(vals)
    , success: success
    , error: error
  });
}

// PUTImport //

async function putimportCrowdFlowObserved($formValues, pk, success, error) {
  var json = $formValues.find('.PUTImport_searchList').val();
  if(json != null && json !== '')
    putimportCrowdFlowObservedVals(JSON.parse(json), success, error);
}

function putimportCrowdFlowObservedVals(json, success, error) {
  $.ajax({
    url: '/api/crowd-flow-observed-import'
    , dataType: 'json'
    , type: 'PUT'
    , contentType: 'application/json; charset=utf-8'
    , data: JSON.stringify(json)
    , success: success
    , error: error
  });
}

async function websocketCrowdFlowObserved(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketCrowdFlowObserved', function (error, message) {
      var json = JSON.parse(message['body']);
      var id = json['id'];
      var pk = json['pk'];
      var pkPage = $('#CrowdFlowObservedForm :input[name=pk]').val();
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
      var $headerSpan = $('<span>').attr('class', '').text('modify CrowdFlowObserveds in ' + json.timeRemaining);
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
async function websocketCrowdFlowObservedInner(apiRequest) {
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
        var inputEntityId = null;
        var inputCustomTrafficLightId = null;
        var inputTrafficSimulationId = null;
        var inputLocation = null;
        var inputAreaServed = null;
        var inputDateObserved = null;
        var inputDateObservedFrom = null;
        var inputDateObservedTo = null;
        var inputColor = null;
        var inputDescription = null;
        var inputName = null;
        var inputDirection = null;
        var inputOccupancy = null;
        var inputPeopleCount = null;
        var inputRefRoadSegment = null;
        var inputSeeAlso = null;
        var inputOwner = null;
        var inputSource = null;
        var inputWalkingAreaId = null;
        var inputAlternateName = null;
        var inputAverageCrowdSpeed = null;
        var inputDataProvider = null;
        var inputAverageHeadwayTime = null;
        var inputCongested = null;
        var inputObjectSuggest = null;
        var inputObjectText = null;
        var inputPageUrlPk = null;
        var inputPk = null;
        var inputInheritPk = null;
        var inputClassCanonicalName = null;
        var inputClassSimpleName = null;
        var inputClassCanonicalNames = null;
        var inputSessionId = null;
        var inputUserKey = null;
        var inputSaves = null;
        var inputObjectTitle = null;
        var inputPageUrlId = null;
        var inputPageUrlApi = null;
        var inputId = null;
        var inputEntityShortId = null;
        var inputAreaServedColors = null;
        var inputAreaServedTitles = null;
        var inputAreaServedLinks = null;
        var inputDateCreated = null;
        var inputDateModified = null;

        if(vars.includes('created'))
          inputCreated = $response.find('#Page_created');
        if(vars.includes('modified'))
          inputModified = $response.find('#Page_modified');
        if(vars.includes('objectId'))
          inputObjectId = $response.find('#Page_objectId');
        if(vars.includes('archived'))
          inputArchived = $response.find('#Page_archived');
        if(vars.includes('deleted'))
          inputDeleted = $response.find('#Page_deleted');
        if(vars.includes('entityId'))
          inputEntityId = $response.find('#Page_entityId');
        if(vars.includes('customTrafficLightId'))
          inputCustomTrafficLightId = $response.find('#Page_customTrafficLightId');
        if(vars.includes('trafficSimulationId'))
          inputTrafficSimulationId = $response.find('#Page_trafficSimulationId');
        if(vars.includes('location'))
          inputLocation = $response.find('#Page_location');
        if(vars.includes('areaServed'))
          inputAreaServed = $response.find('#Page_areaServed');
        if(vars.includes('dateObserved'))
          inputDateObserved = $response.find('#Page_dateObserved');
        if(vars.includes('dateObservedFrom'))
          inputDateObservedFrom = $response.find('#Page_dateObservedFrom');
        if(vars.includes('dateObservedTo'))
          inputDateObservedTo = $response.find('#Page_dateObservedTo');
        if(vars.includes('color'))
          inputColor = $response.find('#Page_color');
        if(vars.includes('description'))
          inputDescription = $response.find('#Page_description');
        if(vars.includes('name'))
          inputName = $response.find('#Page_name');
        if(vars.includes('direction'))
          inputDirection = $response.find('#Page_direction');
        if(vars.includes('occupancy'))
          inputOccupancy = $response.find('#Page_occupancy');
        if(vars.includes('peopleCount'))
          inputPeopleCount = $response.find('#Page_peopleCount');
        if(vars.includes('refRoadSegment'))
          inputRefRoadSegment = $response.find('#Page_refRoadSegment');
        if(vars.includes('seeAlso'))
          inputSeeAlso = $response.find('#Page_seeAlso');
        if(vars.includes('owner'))
          inputOwner = $response.find('#Page_owner');
        if(vars.includes('source'))
          inputSource = $response.find('#Page_source');
        if(vars.includes('walkingAreaId'))
          inputWalkingAreaId = $response.find('#Page_walkingAreaId');
        if(vars.includes('alternateName'))
          inputAlternateName = $response.find('#Page_alternateName');
        if(vars.includes('averageCrowdSpeed'))
          inputAverageCrowdSpeed = $response.find('#Page_averageCrowdSpeed');
        if(vars.includes('dataProvider'))
          inputDataProvider = $response.find('#Page_dataProvider');
        if(vars.includes('averageHeadwayTime'))
          inputAverageHeadwayTime = $response.find('#Page_averageHeadwayTime');
        if(vars.includes('congested'))
          inputCongested = $response.find('#Page_congested');
        if(vars.includes('objectSuggest'))
          inputObjectSuggest = $response.find('#Page_objectSuggest');
        if(vars.includes('objectText'))
          inputObjectText = $response.find('#Page_objectText');
        if(vars.includes('pageUrlPk'))
          inputPageUrlPk = $response.find('#Page_pageUrlPk');
        if(vars.includes('pk'))
          inputPk = $response.find('#Page_pk');
        if(vars.includes('inheritPk'))
          inputInheritPk = $response.find('#Page_inheritPk');
        if(vars.includes('classCanonicalName'))
          inputClassCanonicalName = $response.find('#Page_classCanonicalName');
        if(vars.includes('classSimpleName'))
          inputClassSimpleName = $response.find('#Page_classSimpleName');
        if(vars.includes('classCanonicalNames'))
          inputClassCanonicalNames = $response.find('#Page_classCanonicalNames');
        if(vars.includes('sessionId'))
          inputSessionId = $response.find('#Page_sessionId');
        if(vars.includes('userKey'))
          inputUserKey = $response.find('#Page_userKey');
        if(vars.includes('saves'))
          inputSaves = $response.find('#Page_saves');
        if(vars.includes('objectTitle'))
          inputObjectTitle = $response.find('#Page_objectTitle');
        if(vars.includes('pageUrlId'))
          inputPageUrlId = $response.find('#Page_pageUrlId');
        if(vars.includes('pageUrlApi'))
          inputPageUrlApi = $response.find('#Page_pageUrlApi');
        if(vars.includes('id'))
          inputId = $response.find('#Page_id');
        if(vars.includes('entityShortId'))
          inputEntityShortId = $response.find('#Page_entityShortId');
        if(vars.includes('areaServedColors'))
          inputAreaServedColors = $response.find('#Page_areaServedColors');
        if(vars.includes('areaServedTitles'))
          inputAreaServedTitles = $response.find('#Page_areaServedTitles');
        if(vars.includes('areaServedLinks'))
          inputAreaServedLinks = $response.find('#Page_areaServedLinks');
        if(vars.includes('dateCreated'))
          inputDateCreated = $response.find('#Page_dateCreated');
        if(vars.includes('dateModified'))
          inputDateModified = $response.find('#Page_dateModified');
        jsWebsocketCrowdFlowObserved(pk, vars, $response);

        window.crowdFlowObserved = JSON.parse($response.find('.pageForm .crowdFlowObserved').val());
        window.listCrowdFlowObserved = JSON.parse($response.find('.pageForm .listCrowdFlowObserved').val());


        if(inputCreated) {
          inputCreated.replaceAll('#Page_created');
          addGlow($('#Page_created'));
        }

        if(inputModified) {
          inputModified.replaceAll('#Page_modified');
          addGlow($('#Page_modified'));
        }

        if(inputObjectId) {
          inputObjectId.replaceAll('#Page_objectId');
          addGlow($('#Page_objectId'));
        }

        if(inputArchived) {
          inputArchived.replaceAll('#Page_archived');
          addGlow($('#Page_archived'));
        }

        if(inputDeleted) {
          inputDeleted.replaceAll('#Page_deleted');
          addGlow($('#Page_deleted'));
        }

        if(inputEntityId) {
          inputEntityId.replaceAll('#Page_entityId');
          addGlow($('#Page_entityId'));
        }

        if(inputCustomTrafficLightId) {
          inputCustomTrafficLightId.replaceAll('#Page_customTrafficLightId');
          addGlow($('#Page_customTrafficLightId'));
        }

        if(inputTrafficSimulationId) {
          inputTrafficSimulationId.replaceAll('#Page_trafficSimulationId');
          addGlow($('#Page_trafficSimulationId'));
        }

        if(inputLocation) {
          inputLocation.replaceAll('#Page_location');
          addGlow($('#Page_location'));
        }

        if(inputAreaServed) {
          inputAreaServed.replaceAll('#Page_areaServed');
          addGlow($('#Page_areaServed'));
        }

        if(inputDateObserved) {
          inputDateObserved.replaceAll('#Page_dateObserved');
          addGlow($('#Page_dateObserved'));
        }

        if(inputDateObservedFrom) {
          inputDateObservedFrom.replaceAll('#Page_dateObservedFrom');
          addGlow($('#Page_dateObservedFrom'));
        }

        if(inputDateObservedTo) {
          inputDateObservedTo.replaceAll('#Page_dateObservedTo');
          addGlow($('#Page_dateObservedTo'));
        }

        if(inputColor) {
          inputColor.replaceAll('#Page_color');
          addGlow($('#Page_color'));
        }

        if(inputDescription) {
          inputDescription.replaceAll('#Page_description');
          addGlow($('#Page_description'));
        }

        if(inputName) {
          inputName.replaceAll('#Page_name');
          addGlow($('#Page_name'));
        }

        if(inputDirection) {
          inputDirection.replaceAll('#Page_direction');
          addGlow($('#Page_direction'));
        }

        if(inputOccupancy) {
          inputOccupancy.replaceAll('#Page_occupancy');
          addGlow($('#Page_occupancy'));
        }

        if(inputPeopleCount) {
          inputPeopleCount.replaceAll('#Page_peopleCount');
          addGlow($('#Page_peopleCount'));
        }

        if(inputRefRoadSegment) {
          inputRefRoadSegment.replaceAll('#Page_refRoadSegment');
          addGlow($('#Page_refRoadSegment'));
        }

        if(inputSeeAlso) {
          inputSeeAlso.replaceAll('#Page_seeAlso');
          addGlow($('#Page_seeAlso'));
        }

        if(inputOwner) {
          inputOwner.replaceAll('#Page_owner');
          addGlow($('#Page_owner'));
        }

        if(inputSource) {
          inputSource.replaceAll('#Page_source');
          addGlow($('#Page_source'));
        }

        if(inputWalkingAreaId) {
          inputWalkingAreaId.replaceAll('#Page_walkingAreaId');
          addGlow($('#Page_walkingAreaId'));
        }

        if(inputAlternateName) {
          inputAlternateName.replaceAll('#Page_alternateName');
          addGlow($('#Page_alternateName'));
        }

        if(inputAverageCrowdSpeed) {
          inputAverageCrowdSpeed.replaceAll('#Page_averageCrowdSpeed');
          addGlow($('#Page_averageCrowdSpeed'));
        }

        if(inputDataProvider) {
          inputDataProvider.replaceAll('#Page_dataProvider');
          addGlow($('#Page_dataProvider'));
        }

        if(inputAverageHeadwayTime) {
          inputAverageHeadwayTime.replaceAll('#Page_averageHeadwayTime');
          addGlow($('#Page_averageHeadwayTime'));
        }

        if(inputCongested) {
          inputCongested.replaceAll('#Page_congested');
          addGlow($('#Page_congested'));
        }

        if(inputObjectSuggest) {
          inputObjectSuggest.replaceAll('#Page_objectSuggest');
          addGlow($('#Page_objectSuggest'));
        }

        if(inputObjectText) {
          inputObjectText.replaceAll('#Page_objectText');
          addGlow($('#Page_objectText'));
        }

        if(inputPageUrlPk) {
          inputPageUrlPk.replaceAll('#Page_pageUrlPk');
          addGlow($('#Page_pageUrlPk'));
        }

        if(inputPk) {
          inputPk.replaceAll('#Page_pk');
          addGlow($('#Page_pk'));
        }

        if(inputInheritPk) {
          inputInheritPk.replaceAll('#Page_inheritPk');
          addGlow($('#Page_inheritPk'));
        }

        if(inputClassCanonicalName) {
          inputClassCanonicalName.replaceAll('#Page_classCanonicalName');
          addGlow($('#Page_classCanonicalName'));
        }

        if(inputClassSimpleName) {
          inputClassSimpleName.replaceAll('#Page_classSimpleName');
          addGlow($('#Page_classSimpleName'));
        }

        if(inputClassCanonicalNames) {
          inputClassCanonicalNames.replaceAll('#Page_classCanonicalNames');
          addGlow($('#Page_classCanonicalNames'));
        }

        if(inputSessionId) {
          inputSessionId.replaceAll('#Page_sessionId');
          addGlow($('#Page_sessionId'));
        }

        if(inputUserKey) {
          inputUserKey.replaceAll('#Page_userKey');
          addGlow($('#Page_userKey'));
        }

        if(inputSaves) {
          inputSaves.replaceAll('#Page_saves');
          addGlow($('#Page_saves'));
        }

        if(inputObjectTitle) {
          inputObjectTitle.replaceAll('#Page_objectTitle');
          addGlow($('#Page_objectTitle'));
        }

        if(inputPageUrlId) {
          inputPageUrlId.replaceAll('#Page_pageUrlId');
          addGlow($('#Page_pageUrlId'));
        }

        if(inputPageUrlApi) {
          inputPageUrlApi.replaceAll('#Page_pageUrlApi');
          addGlow($('#Page_pageUrlApi'));
        }

        if(inputId) {
          inputId.replaceAll('#Page_id');
          addGlow($('#Page_id'));
        }

        if(inputEntityShortId) {
          inputEntityShortId.replaceAll('#Page_entityShortId');
          addGlow($('#Page_entityShortId'));
        }

        if(inputAreaServedColors) {
          inputAreaServedColors.replaceAll('#Page_areaServedColors');
          addGlow($('#Page_areaServedColors'));
        }

        if(inputAreaServedTitles) {
          inputAreaServedTitles.replaceAll('#Page_areaServedTitles');
          addGlow($('#Page_areaServedTitles'));
        }

        if(inputAreaServedLinks) {
          inputAreaServedLinks.replaceAll('#Page_areaServedLinks');
          addGlow($('#Page_areaServedLinks'));
        }

        if(inputDateCreated) {
          inputDateCreated.replaceAll('#Page_dateCreated');
          addGlow($('#Page_dateCreated'));
        }

        if(inputDateModified) {
          inputDateModified.replaceAll('#Page_dateModified');
          addGlow($('#Page_dateModified'));
        }

        pageGraphCrowdFlowObserved();
    });
  }
}

function pageGraphCrowdFlowObserved(apiRequest) {
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
          layout['title'] = 'CrowdFlowObserveds';
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
      let popupContent = htmTooltipCrowdFlowObserved(feature, layer);
      layer.bindPopup(popupContent);
      window.mapLayers[feature.properties.id] = layer;
    };
    if(window.mapCrowdFlowObserved) {
      window.geoJSONCrowdFlowObserved.clearLayers();
      $.each( window.listCrowdFlowObserved, function(index, crowdFlowObserved) {
        if(crowdFlowObserved.areaServed) {
          var shapes = [];
          if(Array.isArray(crowdFlowObserved.areaServed))
            shapes = shapes.concat(crowdFlowObserved.areaServed);
          else
            shapes.push(crowdFlowObserved.areaServed);
          shapes.forEach(function(shape, index) {
            var features = [{
              "type": "Feature"
              , "properties": crowdFlowObserved
              , "geometry": shape
              , "index": index
            }];
            var layer = L.geoJSON(features, {
              onEachFeature: onEachFeature
              , style: jsStyleCrowdFlowObserved
              , pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, jsStyleCrowdFlowObserved(feature));
              }
            });
            window.geoJSONCrowdFlowObserved.addLayer(layer);
          });
        }
      });
    } else {
      window.mapCrowdFlowObserved = L.map('htmBodyGraphLocationCrowdFlowObservedPage', {closePopupOnClick: false});
      var data = [];
      var layout = {};
      layout['showlegend'] = true;
      layout['dragmode'] = 'zoom';
      layout['uirevision'] = 'true';
      var legend = L.control({position: 'bottomright'});
      legend.onAdd = jsLegendCrowdFlowObserved;
      legend.addTo(window.mapCrowdFlowObserved);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(window.mapCrowdFlowObserved);

      if(window['DEFAULT_MAP_LOCATION'] && window['DEFAULT_MAP_ZOOM'])
        window.mapCrowdFlowObserved.setView([window['DEFAULT_MAP_LOCATION']['lat'], window['DEFAULT_MAP_LOCATION']['lon']], window['DEFAULT_MAP_ZOOM']);
      else if(window['DEFAULT_MAP_ZOOM'])
        window.mapCrowdFlowObserved.setView(null, window['DEFAULT_MAP_ZOOM']);
      else if(window['DEFAULT_MAP_LOCATION'])
        window.mapCrowdFlowObserved.setView([window['DEFAULT_MAP_LOCATION']['lat'], window['DEFAULT_MAP_LOCATION']['lon']]);

      layout['margin'] = { r: 0, t: 0, b: 0, l: 0 };
      window.geoJSONCrowdFlowObserved = L.geoJSON().addTo(window.mapCrowdFlowObserved);
      $.each( window.listCrowdFlowObserved, function(index, crowdFlowObserved) {
        if(crowdFlowObserved.areaServed) {
          var shapes = [];
          if(Array.isArray(crowdFlowObserved.areaServed))
            shapes = shapes.concat(crowdFlowObserved.areaServed);
          else
            shapes.push(crowdFlowObserved.areaServed);
          shapes.forEach(shape => {
            var features = [{
              "type": "Feature"
              , "properties": crowdFlowObserved
              , "geometry": shape
              , "index": index
            }];
            var layer = L.geoJSON(features, {
              onEachFeature: onEachFeature
              , style: jsStyleCrowdFlowObserved
              , pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, jsStyleCrowdFlowObserved(feature));
              }
            });
            window.geoJSONCrowdFlowObserved.addLayer(layer);
          });
        }
      });
      window.mapCrowdFlowObserved.on('popupopen', function(e) {
        var feature = e.popup._source.feature;
        jsTooltipCrowdFlowObserved(e, feature);
      });
    }
  }
}

function animateStats() {
  $('#pageSearchVal-fqCrowdFlowObserved_time').text('');
  searchPage('CrowdFlowObserved', function() {
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
      $('#fqCrowdFlowObserved_time').val(x);
      $('#fqCrowdFlowObserved_time').change();
      searchPage('CrowdFlowObserved');
    }, speedRate);
  });
}
