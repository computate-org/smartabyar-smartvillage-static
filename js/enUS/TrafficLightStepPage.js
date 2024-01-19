
// Search //

async function searchTrafficLightStep($formFilters, success, error) {
  var filters = searchTrafficLightStepFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, textStatus, errorThrown ) {};

  searchTrafficLightStepVals(filters, success, error);
}

function searchTrafficLightStepFilters($formFilters) {
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

    var filterSimulationName = $formFilters.find('.valueSimulationName').val();
    if(filterSimulationName != null && filterSimulationName !== '')
      filters.push({ name: 'fq', value: 'simulationName:' + filterSimulationName });

    var filterSumocfgPath = $formFilters.find('.valueSumocfgPath').val();
    if(filterSumocfgPath != null && filterSumocfgPath !== '')
      filters.push({ name: 'fq', value: 'sumocfgPath:' + filterSumocfgPath });

    var filterTime = $formFilters.find('.valueTime').val();
    if(filterTime != null && filterTime !== '')
      filters.push({ name: 'fq', value: 'time:' + filterTime });

    var filterDateTime = $formFilters.find('.valueDateTime').val();
    if(filterDateTime != null && filterDateTime !== '')
      filters.push({ name: 'fq', value: 'dateTime:' + filterDateTime });

    var $filterStepCheckbox = $formFilters.find('input.valueStep[type = "checkbox"]');
    var $filterStepSelect = $formFilters.find('select.valueStep');
    var filterStep = $filterStepSelect.length ? $filterStepSelect.val() : $filterStepCheckbox.prop('checked');
    var filterStepSelectVal = $formFilters.find('select.filterStep').val();
    var filterStep = null;
    if(filterStepSelectVal !== '')
      filterStep = filterStepSelectVal == 'true';
    if(filterStep != null && filterStep === true)
      filters.push({ name: 'fq', value: 'step:' + filterStep });

    var filterLocation = $formFilters.find('.valueLocation').val();
    if(filterLocation != null && filterLocation !== '')
      filters.push({ name: 'fq', value: 'location:' + filterLocation });

    var filterColor = $formFilters.find('.valueColor').val();
    if(filterColor != null && filterColor !== '')
      filters.push({ name: 'fq', value: 'color:' + filterColor });

    var filterTrafficLightId = $formFilters.find('.valueTrafficLightId').val();
    if(filterTrafficLightId != null && filterTrafficLightId !== '')
      filters.push({ name: 'fq', value: 'trafficLightId:' + filterTrafficLightId });

    var filterTrafficLightType = $formFilters.find('.valueTrafficLightType').val();
    if(filterTrafficLightType != null && filterTrafficLightType !== '')
      filters.push({ name: 'fq', value: 'trafficLightType:' + filterTrafficLightType });

    var filterAngle = $formFilters.find('.valueAngle').val();
    if(filterAngle != null && filterAngle !== '')
      filters.push({ name: 'fq', value: 'angle:' + filterAngle });

    var filterState = $formFilters.find('.valueState').val();
    if(filterState != null && filterState !== '')
      filters.push({ name: 'fq', value: 'state:' + filterState });

    var filterProgramId = $formFilters.find('.valueProgramId').val();
    if(filterProgramId != null && filterProgramId !== '')
      filters.push({ name: 'fq', value: 'programId:' + filterProgramId });

    var filterPhase = $formFilters.find('.valuePhase').val();
    if(filterPhase != null && filterPhase !== '')
      filters.push({ name: 'fq', value: 'phase:' + filterPhase });

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

    var filterObjectText = $formFilters.find('.valueObjectText').val();
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
    if(filterPageUrlId != null && filterPageUrlId !== '')
      filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

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

    var filterTimeStepId = $formFilters.find('.valueTimeStepId').val();
    if(filterTimeStepId != null && filterTimeStepId !== '')
      filters.push({ name: 'fq', value: 'timeStepId:' + filterTimeStepId });

    var filterLocationColors = $formFilters.find('.valueLocationColors').val();
    if(filterLocationColors != null && filterLocationColors !== '')
      filters.push({ name: 'fq', value: 'locationColors:' + filterLocationColors });

    var filterLocationTitles = $formFilters.find('.valueLocationTitles').val();
    if(filterLocationTitles != null && filterLocationTitles !== '')
      filters.push({ name: 'fq', value: 'locationTitles:' + filterLocationTitles });

    var filterLocationLinks = $formFilters.find('.valueLocationLinks').val();
    if(filterLocationLinks != null && filterLocationLinks !== '')
      filters.push({ name: 'fq', value: 'locationLinks:' + filterLocationLinks });
  }
  return filters;
}

function searchTrafficLightStepVals(filters, success, error) {


  $.ajax({
    url: '/api/traffic-light-step?' + $.param(filters)
    , dataType: 'json'
    , type: 'GET'
    , contentType: 'application/json; charset=utf-8'
    , success: success
    , error: error
  });
}

function suggestTrafficLightStepObjectSuggest($formFilters, $list) {
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
  searchTrafficLightStepVals($formFilters, success, error);
}

// GET //

async function getTrafficLightStep() {
  $.ajax({
    url: '/api/traffic-light-step/' + id
    , dataType: 'json'
    , type: 'GET'
    , contentType: 'application/json; charset=utf-8'
    , success: success
    , error: error
  });
}

// PATCH //

async function patchTrafficLightStep($formFilters, $formValues, id, success, error) {
  var filters = patchTrafficLightStepFilters($formFilters);

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

  var valueSimulationName = $formValues.find('.valueSimulationName').val();
  var removeSimulationName = $formValues.find('.removeSimulationName').val() === 'true';
  var setSimulationName = removeSimulationName ? null : $formValues.find('.setSimulationName').val();
  var addSimulationName = $formValues.find('.addSimulationName').val();
  if(removeSimulationName || setSimulationName != null && setSimulationName !== '')
    vals['setSimulationName'] = setSimulationName;
  if(addSimulationName != null && addSimulationName !== '')
    vals['addSimulationName'] = addSimulationName;
  var removeSimulationName = $formValues.find('.removeSimulationName').val();
  if(removeSimulationName != null && removeSimulationName !== '')
    vals['removeSimulationName'] = removeSimulationName;

  var valueSumocfgPath = $formValues.find('.valueSumocfgPath').val();
  var removeSumocfgPath = $formValues.find('.removeSumocfgPath').val() === 'true';
  var setSumocfgPath = removeSumocfgPath ? null : $formValues.find('.setSumocfgPath').val();
  var addSumocfgPath = $formValues.find('.addSumocfgPath').val();
  if(removeSumocfgPath || setSumocfgPath != null && setSumocfgPath !== '')
    vals['setSumocfgPath'] = setSumocfgPath;
  if(addSumocfgPath != null && addSumocfgPath !== '')
    vals['addSumocfgPath'] = addSumocfgPath;
  var removeSumocfgPath = $formValues.find('.removeSumocfgPath').val();
  if(removeSumocfgPath != null && removeSumocfgPath !== '')
    vals['removeSumocfgPath'] = removeSumocfgPath;

  var valueTime = $formValues.find('.valueTime').val();
  var removeTime = $formValues.find('.removeTime').val() === 'true';
  var setTime = removeTime ? null : $formValues.find('.setTime').val();
  var addTime = $formValues.find('.addTime').val();
  if(removeTime || setTime != null && setTime !== '')
    vals['setTime'] = setTime;
  if(addTime != null && addTime !== '')
    vals['addTime'] = addTime;
  var removeTime = $formValues.find('.removeTime').val();
  if(removeTime != null && removeTime !== '')
    vals['removeTime'] = removeTime;

  var valueDateTime = $formValues.find('.valueDateTime').val();
  var removeDateTime = $formValues.find('.removeDateTime').val() === 'true';
  var setDateTime = removeDateTime ? null : $formValues.find('.setDateTime').val();
  var addDateTime = $formValues.find('.addDateTime').val();
  if(removeDateTime || setDateTime != null && setDateTime !== '')
    vals['setDateTime'] = setDateTime;
  if(addDateTime != null && addDateTime !== '')
    vals['addDateTime'] = addDateTime;
  var removeDateTime = $formValues.find('.removeDateTime').val();
  if(removeDateTime != null && removeDateTime !== '')
    vals['removeDateTime'] = removeDateTime;

  var valueStep = $formValues.find('.valueStep').val();
  var removeStep = $formValues.find('.removeStep').val() === 'true';
  var valueStepSelectVal = $formValues.find('select.setStep').val();
  if(valueStepSelectVal != null && valueStepSelectVal !== '')
    valueStep = valueStepSelectVal == 'true';
  var setStep = removeStep ? null : valueStep;
  var addStep = $formValues.find('.addStep').prop('checked');
  if(removeStep || setStep != null && setStep !== '')
    vals['setStep'] = setStep;
  if(addStep != null && addStep !== '')
    vals['addStep'] = addStep;
  var removeStep = $formValues.find('.removeStep').prop('checked');
  if(removeStep != null && removeStep !== '')
    vals['removeStep'] = removeStep;

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

  var valueTrafficLightId = $formValues.find('.valueTrafficLightId').val();
  var removeTrafficLightId = $formValues.find('.removeTrafficLightId').val() === 'true';
  var setTrafficLightId = removeTrafficLightId ? null : $formValues.find('.setTrafficLightId').val();
  var addTrafficLightId = $formValues.find('.addTrafficLightId').val();
  if(removeTrafficLightId || setTrafficLightId != null && setTrafficLightId !== '')
    vals['setTrafficLightId'] = setTrafficLightId;
  if(addTrafficLightId != null && addTrafficLightId !== '')
    vals['addTrafficLightId'] = addTrafficLightId;
  var removeTrafficLightId = $formValues.find('.removeTrafficLightId').val();
  if(removeTrafficLightId != null && removeTrafficLightId !== '')
    vals['removeTrafficLightId'] = removeTrafficLightId;

  var valueTrafficLightType = $formValues.find('.valueTrafficLightType').val();
  var removeTrafficLightType = $formValues.find('.removeTrafficLightType').val() === 'true';
  var setTrafficLightType = removeTrafficLightType ? null : $formValues.find('.setTrafficLightType').val();
  var addTrafficLightType = $formValues.find('.addTrafficLightType').val();
  if(removeTrafficLightType || setTrafficLightType != null && setTrafficLightType !== '')
    vals['setTrafficLightType'] = setTrafficLightType;
  if(addTrafficLightType != null && addTrafficLightType !== '')
    vals['addTrafficLightType'] = addTrafficLightType;
  var removeTrafficLightType = $formValues.find('.removeTrafficLightType').val();
  if(removeTrafficLightType != null && removeTrafficLightType !== '')
    vals['removeTrafficLightType'] = removeTrafficLightType;

  var valueAngle = $formValues.find('.valueAngle').val();
  var removeAngle = $formValues.find('.removeAngle').val() === 'true';
  var setAngle = removeAngle ? null : $formValues.find('.setAngle').val();
  var addAngle = $formValues.find('.addAngle').val();
  if(removeAngle || setAngle != null && setAngle !== '')
    vals['setAngle'] = setAngle;
  if(addAngle != null && addAngle !== '')
    vals['addAngle'] = addAngle;
  var removeAngle = $formValues.find('.removeAngle').val();
  if(removeAngle != null && removeAngle !== '')
    vals['removeAngle'] = removeAngle;

  var valueState = $formValues.find('.valueState').val();
  var removeState = $formValues.find('.removeState').val() === 'true';
  var setState = removeState ? null : $formValues.find('.setState').val();
  var addState = $formValues.find('.addState').val();
  if(removeState || setState != null && setState !== '')
    vals['setState'] = setState;
  if(addState != null && addState !== '')
    vals['addState'] = addState;
  var removeState = $formValues.find('.removeState').val();
  if(removeState != null && removeState !== '')
    vals['removeState'] = removeState;

  var valueProgramId = $formValues.find('.valueProgramId').val();
  var removeProgramId = $formValues.find('.removeProgramId').val() === 'true';
  var setProgramId = removeProgramId ? null : $formValues.find('.setProgramId').val();
  var addProgramId = $formValues.find('.addProgramId').val();
  if(removeProgramId || setProgramId != null && setProgramId !== '')
    vals['setProgramId'] = setProgramId;
  if(addProgramId != null && addProgramId !== '')
    vals['addProgramId'] = addProgramId;
  var removeProgramId = $formValues.find('.removeProgramId').val();
  if(removeProgramId != null && removeProgramId !== '')
    vals['removeProgramId'] = removeProgramId;

  var valuePhase = $formValues.find('.valuePhase').val();
  var removePhase = $formValues.find('.removePhase').val() === 'true';
  var setPhase = removePhase ? null : $formValues.find('.setPhase').val();
  var addPhase = $formValues.find('.addPhase').val();
  if(removePhase || setPhase != null && setPhase !== '')
    vals['setPhase'] = setPhase;
  if(addPhase != null && addPhase !== '')
    vals['addPhase'] = addPhase;
  var removePhase = $formValues.find('.removePhase').val();
  if(removePhase != null && removePhase !== '')
    vals['removePhase'] = removePhase;

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

  var valueId = $formValues.find('.valueId').val();
  var removeId = $formValues.find('.removeId').val() === 'true';
  var setId = removeId ? null : $formValues.find('.setId').val();
  var addId = $formValues.find('.addId').val();
  if(removeId || setId != null && setId !== '')
    vals['setId'] = setId;
  if(addId != null && addId !== '')
    vals['addId'] = addId;
  var removeId = $formValues.find('.removeId').val();
  if(removeId != null && removeId !== '')
    vals['removeId'] = removeId;

  var valueTimeStepId = $formValues.find('.valueTimeStepId').val();
  var removeTimeStepId = $formValues.find('.removeTimeStepId').val() === 'true';
  var setTimeStepId = removeTimeStepId ? null : $formValues.find('.setTimeStepId').val();
  var addTimeStepId = $formValues.find('.addTimeStepId').val();
  if(removeTimeStepId || setTimeStepId != null && setTimeStepId !== '')
    vals['setTimeStepId'] = setTimeStepId;
  if(addTimeStepId != null && addTimeStepId !== '')
    vals['addTimeStepId'] = addTimeStepId;
  var removeTimeStepId = $formValues.find('.removeTimeStepId').val();
  if(removeTimeStepId != null && removeTimeStepId !== '')
    vals['removeTimeStepId'] = removeTimeStepId;

  var valueX = $formValues.find('.valueX').val();
  var removeX = $formValues.find('.removeX').val() === 'true';
  var setX = removeX ? null : $formValues.find('.setX').val();
  var addX = $formValues.find('.addX').val();
  if(removeX || setX != null && setX !== '')
    vals['setX'] = setX;
  if(addX != null && addX !== '')
    vals['addX'] = addX;
  var removeX = $formValues.find('.removeX').val();
  if(removeX != null && removeX !== '')
    vals['removeX'] = removeX;

  var valueY = $formValues.find('.valueY').val();
  var removeY = $formValues.find('.removeY').val() === 'true';
  var setY = removeY ? null : $formValues.find('.setY').val();
  var addY = $formValues.find('.addY').val();
  if(removeY || setY != null && setY !== '')
    vals['setY'] = setY;
  if(addY != null && addY !== '')
    vals['addY'] = addY;
  var removeY = $formValues.find('.removeY').val();
  if(removeY != null && removeY !== '')
    vals['removeY'] = removeY;

  patchTrafficLightStepVals(id == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'id:' + id}], vals, success, error);
}

function patchTrafficLightStepFilters($formFilters) {
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

    var filterSimulationName = $formFilters.find('.valueSimulationName').val();
    if(filterSimulationName != null && filterSimulationName !== '')
      filters.push({ name: 'fq', value: 'simulationName:' + filterSimulationName });

    var filterSumocfgPath = $formFilters.find('.valueSumocfgPath').val();
    if(filterSumocfgPath != null && filterSumocfgPath !== '')
      filters.push({ name: 'fq', value: 'sumocfgPath:' + filterSumocfgPath });

    var filterTime = $formFilters.find('.valueTime').val();
    if(filterTime != null && filterTime !== '')
      filters.push({ name: 'fq', value: 'time:' + filterTime });

    var filterDateTime = $formFilters.find('.valueDateTime').val();
    if(filterDateTime != null && filterDateTime !== '')
      filters.push({ name: 'fq', value: 'dateTime:' + filterDateTime });

    var $filterStepCheckbox = $formFilters.find('input.valueStep[type = "checkbox"]');
    var $filterStepSelect = $formFilters.find('select.valueStep');
    var filterStep = $filterStepSelect.length ? $filterStepSelect.val() : $filterStepCheckbox.prop('checked');
    var filterStepSelectVal = $formFilters.find('select.filterStep').val();
    var filterStep = null;
    if(filterStepSelectVal !== '')
      filterStep = filterStepSelectVal == 'true';
    if(filterStep != null && filterStep === true)
      filters.push({ name: 'fq', value: 'step:' + filterStep });

    var filterLocation = $formFilters.find('.valueLocation').val();
    if(filterLocation != null && filterLocation !== '')
      filters.push({ name: 'fq', value: 'location:' + filterLocation });

    var filterColor = $formFilters.find('.valueColor').val();
    if(filterColor != null && filterColor !== '')
      filters.push({ name: 'fq', value: 'color:' + filterColor });

    var filterTrafficLightId = $formFilters.find('.valueTrafficLightId').val();
    if(filterTrafficLightId != null && filterTrafficLightId !== '')
      filters.push({ name: 'fq', value: 'trafficLightId:' + filterTrafficLightId });

    var filterTrafficLightType = $formFilters.find('.valueTrafficLightType').val();
    if(filterTrafficLightType != null && filterTrafficLightType !== '')
      filters.push({ name: 'fq', value: 'trafficLightType:' + filterTrafficLightType });

    var filterAngle = $formFilters.find('.valueAngle').val();
    if(filterAngle != null && filterAngle !== '')
      filters.push({ name: 'fq', value: 'angle:' + filterAngle });

    var filterState = $formFilters.find('.valueState').val();
    if(filterState != null && filterState !== '')
      filters.push({ name: 'fq', value: 'state:' + filterState });

    var filterProgramId = $formFilters.find('.valueProgramId').val();
    if(filterProgramId != null && filterProgramId !== '')
      filters.push({ name: 'fq', value: 'programId:' + filterProgramId });

    var filterPhase = $formFilters.find('.valuePhase').val();
    if(filterPhase != null && filterPhase !== '')
      filters.push({ name: 'fq', value: 'phase:' + filterPhase });

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

    var filterObjectText = $formFilters.find('.valueObjectText').val();
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
    if(filterPageUrlId != null && filterPageUrlId !== '')
      filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

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

    var filterTimeStepId = $formFilters.find('.valueTimeStepId').val();
    if(filterTimeStepId != null && filterTimeStepId !== '')
      filters.push({ name: 'fq', value: 'timeStepId:' + filterTimeStepId });

    var filterLocationColors = $formFilters.find('.valueLocationColors').val();
    if(filterLocationColors != null && filterLocationColors !== '')
      filters.push({ name: 'fq', value: 'locationColors:' + filterLocationColors });

    var filterLocationTitles = $formFilters.find('.valueLocationTitles').val();
    if(filterLocationTitles != null && filterLocationTitles !== '')
      filters.push({ name: 'fq', value: 'locationTitles:' + filterLocationTitles });

    var filterLocationLinks = $formFilters.find('.valueLocationLinks').val();
    if(filterLocationLinks != null && filterLocationLinks !== '')
      filters.push({ name: 'fq', value: 'locationLinks:' + filterLocationLinks });
  }
  return filters;
}

function patchTrafficLightStepVal(filters, v, val, success, error) {
  var vals = {};
  vals[v] = val;
  patchTrafficLightStepVals(filters, vals, success, error);
}

function patchTrafficLightStepVals(filters, vals, success, error) {
  $.ajax({
    url: '/api/traffic-light-step?' + $.param(filters)
    , dataType: 'json'
    , type: 'PATCH'
    , contentType: 'application/json; charset=utf-8'
    , data: JSON.stringify(vals)
    , success: success
    , error: error
  });
}

// POST //

async function postTrafficLightStep($formValues, success, error) {
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

  var valueSimulationName = $formValues.find('.valueSimulationName').val();
  if(valueSimulationName != null && valueSimulationName !== '')
    vals['simulationName'] = valueSimulationName;

  var valueSumocfgPath = $formValues.find('.valueSumocfgPath').val();
  if(valueSumocfgPath != null && valueSumocfgPath !== '')
    vals['sumocfgPath'] = valueSumocfgPath;

  var valueTime = $formValues.find('.valueTime').val();
  if(valueTime != null && valueTime !== '')
    vals['time'] = valueTime;

  var valueDateTime = $formValues.find('.valueDateTime').val();
  if(valueDateTime != null && valueDateTime !== '')
    vals['dateTime'] = valueDateTime;

  var valueStep = $formValues.find('.valueStep').val();
  if(valueStep != null && valueStep !== '')
    vals['step'] = valueStep == 'true';

  var valueLocation = $formValues.find('.valueLocation').val();
  if(valueLocation != null && valueLocation !== '')
    vals['location'] = JSON.parse(valueLocation);

  var valueColor = $formValues.find('.valueColor').val();
  if(valueColor != null && valueColor !== '')
    vals['color'] = valueColor;

  var valueTrafficLightId = $formValues.find('.valueTrafficLightId').val();
  if(valueTrafficLightId != null && valueTrafficLightId !== '')
    vals['trafficLightId'] = valueTrafficLightId;

  var valueTrafficLightType = $formValues.find('.valueTrafficLightType').val();
  if(valueTrafficLightType != null && valueTrafficLightType !== '')
    vals['trafficLightType'] = valueTrafficLightType;

  var valueAngle = $formValues.find('.valueAngle').val();
  if(valueAngle != null && valueAngle !== '')
    vals['angle'] = valueAngle;

  var valueState = $formValues.find('.valueState').val();
  if(valueState != null && valueState !== '')
    vals['state'] = valueState;

  var valueProgramId = $formValues.find('.valueProgramId').val();
  if(valueProgramId != null && valueProgramId !== '')
    vals['programId'] = valueProgramId;

  var valuePhase = $formValues.find('.valuePhase').val();
  if(valuePhase != null && valuePhase !== '')
    vals['phase'] = valuePhase;

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

  var valueId = $formValues.find('.valueId').val();
  if(valueId != null && valueId !== '')
    vals['id'] = valueId;

  var valueTimeStepId = $formValues.find('.valueTimeStepId').val();
  if(valueTimeStepId != null && valueTimeStepId !== '')
    vals['timeStepId'] = valueTimeStepId;

  var valueX = $formValues.find('.valueX').val();
  if(valueX != null && valueX !== '')
    vals['x'] = valueX;

  var valueY = $formValues.find('.valueY').val();
  if(valueY != null && valueY !== '')
    vals['y'] = valueY;

  $.ajax({
    url: '/api/traffic-light-step'
    , dataType: 'json'
    , type: 'POST'
    , contentType: 'application/json; charset=utf-8'
    , data: JSON.stringify(vals)
    , success: success
    , error: error
  });
}

function postTrafficLightStepVals(vals, success, error) {
  $.ajax({
    url: '/api/traffic-light-step'
    , dataType: 'json'
    , type: 'POST'
    , contentType: 'application/json; charset=utf-8'
    , data: JSON.stringify(vals)
    , success: success
    , error: error
  });
}

// PUTImport //

async function putimportTrafficLightStep($formValues, id, success, error) {
  var json = $formValues.find('.PUTImport_searchList').val();
  if(json != null && json !== '')
    putimportTrafficLightStepVals(JSON.parse(json), success, error);
}

function putimportTrafficLightStepVals(json, success, error) {
  $.ajax({
    url: '/api/traffic-light-step-import'
    , dataType: 'json'
    , type: 'PUT'
    , contentType: 'application/json; charset=utf-8'
    , data: JSON.stringify(json)
    , success: success
    , error: error
  });
}

async function websocketTrafficLightStep(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketTrafficLightStep', function (error, message) {
      var json = JSON.parse(message['body']);
      var id = json['id'];
      var pk = json['pk'];
      var pkPage = $('#TrafficLightStepForm :input[name=id]').val();
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
      var $headerSpan = $('<span>').attr('class', '').text('modify traffic light steps in ' + json.timeRemaining);
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
async function websocketTrafficLightStepInner(apiRequest) {
  var id = apiRequest['id'];
  var ids = apiRequest['ids'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(id != null && vars.length > 0) {
    var queryParams = "?" + $(".pageSearchVal").get().filter(elem => elem.innerText.length > 0).map(elem => elem.innerText).join("&");
    var uri = location.pathname + queryParams;
    $.get(uri, {}, function(data) {
      var $response = $("<html/>").html(data);
        var inputCreated = null;
        var inputModified = null;
        var inputObjectId = null;
        var inputArchived = null;
        var inputDeleted = null;
        var inputSimulationName = null;
        var inputSumocfgPath = null;
        var inputTime = null;
        var inputDateTime = null;
        var inputStep = null;
        var inputLocation = null;
        var inputColor = null;
        var inputTrafficLightId = null;
        var inputTrafficLightType = null;
        var inputAngle = null;
        var inputState = null;
        var inputProgramId = null;
        var inputPhase = null;
        var inputInheritPk = null;
        var inputClassCanonicalName = null;
        var inputClassSimpleName = null;
        var inputClassCanonicalNames = null;
        var inputSessionId = null;
        var inputUserKey = null;
        var inputSaves = null;
        var inputObjectTitle = null;
        var inputObjectText = null;
        var inputPageUrlId = null;
        var inputPageUrlPk = null;
        var inputPageUrlApi = null;
        var inputId = null;
        var inputObjectSuggest = null;
        var inputTimeStepId = null;
        var inputX = null;
        var inputY = null;
        var inputLocationColors = null;
        var inputLocationTitles = null;
        var inputLocationLinks = null;

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
        if(vars.includes('simulationName'))
          inputSimulationName = $response.find('#Page_simulationName');
        if(vars.includes('sumocfgPath'))
          inputSumocfgPath = $response.find('#Page_sumocfgPath');
        if(vars.includes('time'))
          inputTime = $response.find('#Page_time');
        if(vars.includes('dateTime'))
          inputDateTime = $response.find('#Page_dateTime');
        if(vars.includes('step'))
          inputStep = $response.find('#Page_step');
        if(vars.includes('location'))
          inputLocation = $response.find('#Page_location');
        if(vars.includes('color'))
          inputColor = $response.find('#Page_color');
        if(vars.includes('trafficLightId'))
          inputTrafficLightId = $response.find('#Page_trafficLightId');
        if(vars.includes('trafficLightType'))
          inputTrafficLightType = $response.find('#Page_trafficLightType');
        if(vars.includes('angle'))
          inputAngle = $response.find('#Page_angle');
        if(vars.includes('state'))
          inputState = $response.find('#Page_state');
        if(vars.includes('programId'))
          inputProgramId = $response.find('#Page_programId');
        if(vars.includes('phase'))
          inputPhase = $response.find('#Page_phase');
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
        if(vars.includes('objectText'))
          inputObjectText = $response.find('#Page_objectText');
        if(vars.includes('pageUrlId'))
          inputPageUrlId = $response.find('#Page_pageUrlId');
        if(vars.includes('pageUrlPk'))
          inputPageUrlPk = $response.find('#Page_pageUrlPk');
        if(vars.includes('pageUrlApi'))
          inputPageUrlApi = $response.find('#Page_pageUrlApi');
        if(vars.includes('id'))
          inputId = $response.find('#Page_id');
        if(vars.includes('objectSuggest'))
          inputObjectSuggest = $response.find('#Page_objectSuggest');
        if(vars.includes('timeStepId'))
          inputTimeStepId = $response.find('#Page_timeStepId');
        if(vars.includes('x'))
          inputX = $response.find('#Page_x');
        if(vars.includes('y'))
          inputY = $response.find('#Page_y');
        if(vars.includes('locationColors'))
          inputLocationColors = $response.find('#Page_locationColors');
        if(vars.includes('locationTitles'))
          inputLocationTitles = $response.find('#Page_locationTitles');
        if(vars.includes('locationLinks'))
          inputLocationLinks = $response.find('#Page_locationLinks');
        jsWebsocketTrafficLightStep(id, vars, $response);

        window.trafficLightStep = JSON.parse($response.find('.pageForm .trafficLightStep').val());
        window.listTrafficLightStep = JSON.parse($response.find('.pageForm .listTrafficLightStep').val());


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

        if(inputSimulationName) {
          inputSimulationName.replaceAll('#Page_simulationName');
          addGlow($('#Page_simulationName'));
        }

        if(inputSumocfgPath) {
          inputSumocfgPath.replaceAll('#Page_sumocfgPath');
          addGlow($('#Page_sumocfgPath'));
        }

        if(inputTime) {
          inputTime.replaceAll('#Page_time');
          addGlow($('#Page_time'));
        }

        if(inputDateTime) {
          inputDateTime.replaceAll('#Page_dateTime');
          addGlow($('#Page_dateTime'));
        }

        if(inputStep) {
          inputStep.replaceAll('#Page_step');
          addGlow($('#Page_step'));
        }

        if(inputLocation) {
          inputLocation.replaceAll('#Page_location');
          addGlow($('#Page_location'));
        }

        if(inputColor) {
          inputColor.replaceAll('#Page_color');
          addGlow($('#Page_color'));
        }

        if(inputTrafficLightId) {
          inputTrafficLightId.replaceAll('#Page_trafficLightId');
          addGlow($('#Page_trafficLightId'));
        }

        if(inputTrafficLightType) {
          inputTrafficLightType.replaceAll('#Page_trafficLightType');
          addGlow($('#Page_trafficLightType'));
        }

        if(inputAngle) {
          inputAngle.replaceAll('#Page_angle');
          addGlow($('#Page_angle'));
        }

        if(inputState) {
          inputState.replaceAll('#Page_state');
          addGlow($('#Page_state'));
        }

        if(inputProgramId) {
          inputProgramId.replaceAll('#Page_programId');
          addGlow($('#Page_programId'));
        }

        if(inputPhase) {
          inputPhase.replaceAll('#Page_phase');
          addGlow($('#Page_phase'));
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

        if(inputObjectText) {
          inputObjectText.replaceAll('#Page_objectText');
          addGlow($('#Page_objectText'));
        }

        if(inputPageUrlId) {
          inputPageUrlId.replaceAll('#Page_pageUrlId');
          addGlow($('#Page_pageUrlId'));
        }

        if(inputPageUrlPk) {
          inputPageUrlPk.replaceAll('#Page_pageUrlPk');
          addGlow($('#Page_pageUrlPk'));
        }

        if(inputPageUrlApi) {
          inputPageUrlApi.replaceAll('#Page_pageUrlApi');
          addGlow($('#Page_pageUrlApi'));
        }

        if(inputId) {
          inputId.replaceAll('#Page_id');
          addGlow($('#Page_id'));
        }

        if(inputObjectSuggest) {
          inputObjectSuggest.replaceAll('#Page_objectSuggest');
          addGlow($('#Page_objectSuggest'));
        }

        if(inputTimeStepId) {
          inputTimeStepId.replaceAll('#Page_timeStepId');
          addGlow($('#Page_timeStepId'));
        }

        if(inputX) {
          inputX.replaceAll('#Page_x');
          addGlow($('#Page_x'));
        }

        if(inputY) {
          inputY.replaceAll('#Page_y');
          addGlow($('#Page_y'));
        }

        if(inputLocationColors) {
          inputLocationColors.replaceAll('#Page_locationColors');
          addGlow($('#Page_locationColors'));
        }

        if(inputLocationTitles) {
          inputLocationTitles.replaceAll('#Page_locationTitles');
          addGlow($('#Page_locationTitles'));
        }

        if(inputLocationLinks) {
          inputLocationLinks.replaceAll('#Page_locationLinks');
          addGlow($('#Page_locationLinks'));
        }

        pageGraphTrafficLightStep();
    });
  }
}

function pageGraphTrafficLightStep(apiRequest) {
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
          layout['title'] = 'traffic light steps';
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
        Plotly.react('htmBodyGraphMapResultPage', data, layout);
      }
    }

    // Graph Location
    window.mapLayers = {};
    function onEachFeature(feature, layer) {
      let popupContent = htmTooltipTrafficLightStep(feature, layer);
      layer.bindPopup(popupContent);
      window.mapLayers[feature.properties.id] = layer;
    };
    if(window.mapTrafficLightStep) {
      window.geoJSONTrafficLightStep.clearLayers();
      $.each( window.listTrafficLightStep, function(index, trafficLightStep) {
        if(trafficLightStep.location) {
          var shapes = [];
          if(Array.isArray(trafficLightStep.location))
            shapes = shapes.concat(trafficLightStep.location);
          else
            shapes.push(trafficLightStep.location);
          shapes.forEach(function(shape, index) {
            var features = [{
              "type": "Feature"
              , "properties": trafficLightStep
              , "geometry": shape
              , "index": index
            }];
            var layer = L.geoJSON(features, {
              onEachFeature: onEachFeature
              , style: jsStyleTrafficLightStep
              , pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, jsStyleTrafficLightStep(feature));
              }
            });
            window.geoJSONTrafficLightStep.addLayer(layer);
          });
        }
      });
    } else {
      window.mapTrafficLightStep = L.map('htmBodyGraphLocationTrafficLightStepPage', {closePopupOnClick: false});
      var data = [];
      var layout = {};
      layout['showlegend'] = true;
      layout['dragmode'] = 'zoom';
      layout['uirevision'] = 'true';
      var legend = L.control({position: 'bottomright'});
      legend.onAdd = jsLegendTrafficLightStep;
      legend.addTo(window.mapTrafficLightStep);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(window.mapTrafficLightStep);

      if(window['DEFAULT_MAP_LOCATION'] && window['DEFAULT_MAP_ZOOM'])
        window.mapTrafficLightStep.setView([window['DEFAULT_MAP_LOCATION']['lat'], window['DEFAULT_MAP_LOCATION']['lon']], window['DEFAULT_MAP_ZOOM']);
      else if(window['DEFAULT_MAP_ZOOM'])
        window.mapTrafficLightStep.setView(null, window['DEFAULT_MAP_ZOOM']);
      else if(window['DEFAULT_MAP_LOCATION'])
        window.mapTrafficLightStep.setView([window['DEFAULT_MAP_LOCATION']['lat'], window['DEFAULT_MAP_LOCATION']['lon']]);

      layout['margin'] = { r: 0, t: 0, b: 0, l: 0 };
      window.geoJSONTrafficLightStep = L.geoJSON().addTo(window.mapTrafficLightStep);
      $.each( window.listTrafficLightStep, function(index, trafficLightStep) {
        if(trafficLightStep.location) {
          var shapes = [];
          if(Array.isArray(trafficLightStep.location))
            shapes = shapes.concat(trafficLightStep.location);
          else
            shapes.push(trafficLightStep.location);
          shapes.forEach(shape => {
            var features = [{
              "type": "Feature"
              , "properties": trafficLightStep
              , "geometry": shape
              , "index": index
            }];
            var layer = L.geoJSON(features, {
              onEachFeature: onEachFeature
              , style: jsStyleTrafficLightStep
              , pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, jsStyleTrafficLightStep(feature));
              }
            });
            window.geoJSONTrafficLightStep.addLayer(layer);
          });
        }
      });
      window.mapTrafficLightStep.on('popupopen', function(e) {
        var feature = e.popup._source.feature;
        jsTooltipTrafficLightStep(e, feature);
      });
    }
  }
}

function animateStats() {
  $('#pageSearchVal-fqTrafficLightStep_time').text('');
  searchPage('TrafficLightStep', function() {
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
      $('#fqTrafficLightStep_time').val(x);
      $('#fqTrafficLightStep_time').change();
      searchPage('TrafficLightStep');
    }, speedRate);
  });
}
