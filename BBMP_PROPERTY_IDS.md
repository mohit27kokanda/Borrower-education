# BBMP Property ID Format and Sample IDs

## BBMP Property ID Format

BBMP (Bruhat Bengaluru Mahanagara Palike) Property IDs are unique identifiers assigned to properties within Bangalore Municipal Corporation limits.

### Property ID Structure

BBMP Property IDs typically follow this format:
- **Format**: `ZONE-WARD-BLOCK-PROPERTY_NUMBER`
- **Example**: `0101010100123456`
- **Length**: Usually 16 digits

### Zone Codes (First 2 digits)
- 01 - East Zone
- 02 - West Zone  
- 03 - South Zone
- 04 - Yelahanka Zone
- 05 - Bommanahalli Zone
- 06 - Dasarahalli Zone
- 07 - Mahadevapura Zone
- 08 - RR Nagar Zone

## Sample BBMP Property IDs

### For Testing and Development

Here are sample BBMP Property IDs based on the standard format:

#### East Zone Properties
```
0101010100001234 - East Zone, Ward 01, Property in Shivajinagar area
0101020200005678 - East Zone, Ward 02, Property in Richmond Town area
0101030300009012 - East Zone, Ward 03, Property in Cubbon Park area
```

#### South Zone Properties
```
0301010100002345 - South Zone, Ward 01, Property in Jayanagar area
0301020200006789 - South Zone, Ward 02, Property in BTM Layout area
0301030300001123 - South Zone, Ward 03, Property in JP Nagar area
```

#### West Zone Properties
```
0201010100003456 - West Zone, Ward 01, Property in Rajajinagar area
0201020200007890 - West Zone, Ward 02, Property in Malleshwaram area
0201030300004567 - West Zone, Ward 03, Property in Yeshwanthpur area
```

#### Mahadevapura Zone Properties
```
0701010100008901 - Mahadevapura Zone, Property in Whitefield area
0701020200002345 - Mahadevapura Zone, Property in Marathahalli area
0701030300006789 - Mahadevapura Zone, Property in Bellandur area
```

#### Bommanahalli Zone Properties
```
0501010100001234 - Bommanahalli Zone, Property in HSR Layout area
0501020200005678 - Bommanahalli Zone, Property in Electronic City area
0501030300009012 - Bommanahalli Zone, Property in Koramangala area
```

## How to Find Your BBMP Property ID

### Method 1: Property Tax Receipt
Your BBMP Property ID is printed on your property tax receipt as "PID" or "Property ID"

### Method 2: BBMP Online Portal
1. Visit: https://bbmptax.karnataka.gov.in
2. Click on "Search Property"
3. Enter your address or owner name
4. Your Property ID will be displayed in the results

### Method 3: Property Tax Demand Notice
Check your annual property tax demand notice - the PID is mentioned at the top

### Method 4: BBMP Office
Visit your local BBMP ward office with property documents to obtain your PID

## Sample API Usage with Real Format

```javascript
import { verifyPropertyOwnerBBMP } from './service';

// Example 1: East Zone Property
const propertyId1 = "0101010100001234";
const result1 = await verifyPropertyOwnerBBMP(propertyId1);

// Example 2: South Zone Property  
const propertyId2 = "0301010100002345";
const result2 = await verifyPropertyOwnerBBMP(propertyId2);

// Example 3: Mahadevapura Zone Property
const propertyId3 = "0701010100008901";
const result3 = await verifyPropertyOwnerBBMP(propertyId3);

if (result1.success) {
  console.log("Owner Name:", result1.ownerName);
  console.log("Zone:", result1.zone);
  console.log("Ward:", result1.ward);
}
```

## Important Notes

### For Testing
1. **Sample IDs Provided**: The IDs above are formatted examples based on BBMP's standard structure
2. **Mock Testing**: Use these formats when creating mock data or test cases
3. **Real Data**: For production, use actual Property IDs from BBMP portal

### For Production
1. **Verify Property IDs**: Always verify Property IDs from official BBMP sources
2. **API Access**: Register with BBMP for API access credentials
3. **Data Accuracy**: Cross-reference with official property tax records

## BBMP Property ID Lookup Tools

### Online Tools
- **BBMP Portal**: https://bbmptax.karnataka.gov.in
- **Property Search**: Search by address, owner name, or survey number
- **Mobile App**: BBMP Sahaaya mobile app

### Offline Methods
- Visit BBMP ward office
- Check property tax receipts
- Review Khata certificate

## Common Property ID Patterns

### Residential Properties
```
Format: ZZWWBBPPPPPPPP
ZZ = Zone (2 digits)
WW = Ward (2 digits)  
BB = Block (2 digits)
PPPPPPPP = Property Number (8 digits)
```

### Commercial Properties
Similar format as residential, with property type indicated in BBMP records

### Apartments/Flats
Each individual unit may have its own sub-PID or share a main building PID

## Validation

### Valid Property ID Characteristics
- ✅ 16 digits long (standard)
- ✅ Starts with valid zone code (01-08)
- ✅ Contains only numeric characters
- ✅ Matches BBMP database records

### Invalid Examples
- ❌ Less than 16 digits
- ❌ Contains letters or special characters
- ❌ Invalid zone code (00 or 09+)
- ❌ Not found in BBMP database

## Quick Reference Table

| Zone | Zone Code | Example Property ID | Area Example |
|------|-----------|-------------------|--------------|
| East | 01 | 0101010100001234 | Shivajinagar |
| West | 02 | 0201010100003456 | Rajajinagar |
| South | 03 | 0301010100002345 | Jayanagar |
| Yelahanka | 04 | 0401010100007890 | Yelahanka New Town |
| Bommanahalli | 05 | 0501010100001234 | HSR Layout |
| Dasarahalli | 06 | 0601010100004567 | Peenya |
| Mahadevapura | 07 | 0701010100008901 | Whitefield |
| RR Nagar | 08 | 0801010100005678 | Kengeri |

## Support

For assistance with BBMP Property IDs:
- **BBMP Helpline**: 1800-425-1550
- **Email**: bbmp-support@karnataka.gov.in
- **Portal**: https://bbmptax.karnataka.gov.in
- **In-person**: Visit your local BBMP ward office

## References

- BBMP Official Portal: https://bbmptax.karnataka.gov.in
- Property Tax Information: https://bbmp.gov.in/propertytax
- Ward Information: https://bbmp.gov.in/ward-details
