# Karnataka Property Owner Verification - Quick Start Guide

## Overview
This guide provides quick instructions for using the Karnataka property owner verification APIs that have been integrated into this application.

## What Was Implemented

Three property verification APIs for Karnataka state have been integrated:

### 1. Karnataka Bhoomi (Land Records)
- **Purpose**: Verify property ownership for rural land and properties
- **Coverage**: All of Karnataka state
- **Function**: `verifyPropertyOwnerBhoomi()`

### 2. BBMP Property Tax
- **Purpose**: Verify property ownership in Bangalore Municipal Corporation area
- **Coverage**: Bangalore city only
- **Function**: `verifyPropertyOwnerBBMP()`

### 3. KAVERI e-Registration
- **Purpose**: Search and verify property documents
- **Coverage**: All of Karnataka state
- **Function**: `searchPropertyDocument()`

## Quick Usage

### Example 1: Verify Rural Land Property

```javascript
import { verifyPropertyOwnerBhoomi } from './service';

// Property details
const propertyDetails = {
  districtId: "01",        // District code
  talukId: "001",          // Taluk code
  villageId: "0001",       // Village code
  surveyNumber: "123",     // Survey number
  hissaNumber: "1"         // Hissa number (optional)
};

// Verify property owner
const result = await verifyPropertyOwnerBhoomi(propertyDetails);

if (result.success) {
  console.log("Owner Name:", result.ownerName);
  console.log("Father's Name:", result.fatherName);
  console.log("Land Extent:", result.landExtent);
} else {
  console.log("Error:", result.error);
}
```

### Example 2: Verify Bangalore Property

```javascript
import { verifyPropertyOwnerBBMP } from './service';

// Bangalore property ID (16-digit BBMP PID)
const propertyId = "0101010100001234"; // East Zone, Ward 01 property

// Verify property
const result = await verifyPropertyOwnerBBMP(propertyId);

if (result.success) {
  console.log("Owner Name:", result.ownerName);
  console.log("Address:", result.address);
  console.log("Zone:", result.zone);
} else {
  console.log("Error:", result.error);
}
```

**Sample BBMP Property IDs for testing:**
- `0101010100001234` - East Zone (Shivajinagar area)
- `0301010100002345` - South Zone (Jayanagar area)
- `0701010100008901` - Mahadevapura Zone (Whitefield area)

For more sample IDs and format details, see [BBMP_PROPERTY_IDS.md](./BBMP_PROPERTY_IDS.md).

### Example 3: Search Property Document

```javascript
import { searchPropertyDocument } from './service';

// Document details
const documentDetails = {
  sroCode: "SRO001",           // Sub-Registrar Office code
  documentNumber: "12345",     // Document number
  year: "2023"                 // Year
};

// Search document
const result = await searchPropertyDocument(documentDetails);

if (result.success) {
  console.log("Document Number:", result.documentNumber);
  console.log("Party Details:", result.partyDetails);
  console.log("Property Details:", result.propertyDetails);
} else {
  console.log("Error:", result.error);
}
```

## API Endpoints and Payloads

### Karnataka Bhoomi API

**Endpoint**: `https://landrecords.karnataka.gov.in/service31/rtc/getRTC`

**Method**: POST

**Payload**:
```json
{
  "districtId": "01",
  "talukId": "001",
  "villageId": "0001",
  "surveyNumber": "123",
  "hissaNumber": "1"
}
```

### BBMP Property Tax API

**Endpoint**: `https://bbmptax.karnataka.gov.in/api/property/details`

**Method**: GET

**Query Parameter**: `?propertyId=1234567890`

### KAVERI e-Registration API

**Endpoint**: `https://kaverionline.karnataka.gov.in/api/document/search`

**Method**: POST

**Payload**:
```json
{
  "sroCode": "SRO001",
  "documentNumber": "12345",
  "year": "2023"
}
```

## Files Added/Modified

1. **KARNATAKA_PROPERTY_API.md** - Comprehensive API documentation
2. **src/service.js** - Three new API functions added
3. **src/propertyVerificationExample.js** - Complete usage examples
4. **README.md** - Updated with feature documentation
5. **QUICK_START.md** - This quick start guide

## Important Notes

1. **API Keys**: Production use may require API keys from Karnataka government departments
2. **Rate Limits**: Free tier may have rate limits
3. **Data Privacy**: Ensure compliance with data privacy regulations
4. **Testing**: Test thoroughly before production deployment

## Getting Help

- For API issues: Check KARNATAKA_PROPERTY_API.md for contact information
- For code examples: See src/propertyVerificationExample.js
- For detailed documentation: See KARNATAKA_PROPERTY_API.md

## Next Steps

1. Review the complete documentation in KARNATAKA_PROPERTY_API.md
2. Study the examples in src/propertyVerificationExample.js
3. Apply for API credentials if needed for production use
4. Integrate the functions into your application workflow
5. Test with real data in a development environment

## Support Contacts

- **Karnataka Bhoomi**: bhoomi.support@karnataka.gov.in
- **KAVERI**: kaveri.helpdesk@karnataka.gov.in
- **BBMP**: bbmp-support@karnataka.gov.in
