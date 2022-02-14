import { Injectable } from '@angular/core';

@Injectable()
export class MockService {
  constructor() {}

  getMockDiff() {
    return {
      left_doc_client_id: 'VERISK_001',
      left_form_number: 'CG00010196',
      right_doc_client_id: 'VERISK_001',
      right_form_number: 'AG00011010',
      diff: [
        {
          left_line: 1,
          left_text: 'COMMERCIAL GENERAL LIABILITY COVERAGE FORM',
          right_line: 1,
          right_text:
            'AGRICULTURAL CAPITAL ASSETS (OUTPUT POLICY) COVERAGE FORM',
        },
        {
          left_line: 2,
          left_text:
            'Various provisions in this policy restrict coverage. Read the entire policy carefully to determine rights, duties and what is and is not covered.',
          right_line: 2,
          right_text:
            'Various provisions in this policy restrict coverage. Read the entire policy carefully to determine rights, duties and what is and is not covered.',
        },
        {
          left_line: 3,
          left_text:
            'Throughout this policy the words "you" and "your" refer to the Named Insured shown in the Declarations, and any other person or organization qualifying as a Named Insured under this policy. The words "we", "us" and "our" refer to the company providing this insurance.',
          right_line: 3,
          right_text:
            'Throughout this policy the words "you" and "your" refer to the Named Insured shown in the Declarations. The words "we", "us" and "our" refer to the Company providing this insurance.',
        },
        {
          left_line: 4,
          left_text:
            'The word "insured" means any person or organization qualifying as such under WHO IS AN INSURED (SECTION II).',
          right_line: null,
          right_text: '',
        },
        {
          left_line: 5,
          left_text:
            'Other words and phrases that appear in quotation marks have special meaning. Refer to DEFINITIONS (SECTION V).',
          right_line: 4,
          right_text:
            'Other words and phrases that appear in quotation marks have special meaning. Refer to Section L - Definitions.',
        },
        {
          left_line: 6,
          left_text: 'SECTION I - COVERAGES',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 6,
          right_text:
            'We will pay for direct physical loss of or damage to Covered Property at "covered locations" caused by or resulting from any Covered Cause of Loss.',
        },
        {
          left_line: 7,
          left_text: 'COVERAGE A. BODILY INJURY AND PROPERTY DAMAGE LIABILITY',
          right_line: 5,
          right_text: 'A. Coverage',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 7,
          right_text: '1. Covered Property',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 8,
          right_text:
            'Covered Property, as used in this Coverage Part, means the type of property described in Paragraph A.1., and limited in Paragraph A.2., Property Not Covered, if a Limit Of Insurance is shown in the Declarations for that type of property.',
        },
        {
          left_line: 8,
          left_text: '1. Insuring Agreement',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 9,
          right_text:
            'a. Building, meaning buildings and structures including:',
        },
        {
          left_line: 9,
          left_text:
            'a. We will pay those sums that the insured becomes legally obligated to pay as damages because of "bodily injury" or "property damage" to which this insurance applies. We will have the right and duty to defend the insured against any "suit" seeking those damages. However, we will have no duty to defend the insured against any "suit" seeking damages for "bodily injury" or "property damage" to which this insurance does not apply. We may, at our discretion, investigate any "occurrence" and settle any claim or "suit" that may result. But:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 10,
          right_text: '(1) Portable buildings and portable structures;',
        },
        {
          left_line: 10,
          left_text:
            '(1) The amount we will pay for damages is limited as described in LIMITS OF INSURANCE (SECTION III); and',
          right_line: 134,
          right_text: 'Limit of Insurance\n$',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 11,
          right_text: '(2) "Dwelling"(s), including private structures;',
        },
        {
          left_line: 11,
          left_text:
            '(2) Our right and duty to defend end when we have used up the applicable limit of insurance in the payment of judgments or settlements under Coverages A or B or medical expenses under Coverage C.',
          right_line: 155,
          right_text: 'Limit of Insurance\n$',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 12,
          right_text: '(3) Silos, whether or not attached to buildings;',
        },
        {
          left_line: 12,
          left_text:
            'No other obligation or liability to pay sums or perform acts or services is covered unless explicitly provided for under SUPPLEMENTARY PAYMENTS - COVERAGES A AND B.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 13,
          right_text: '(4) Completed additions;',
        },
        {
          left_line: 13,
          left_text:
            'b. This insurance applies to "bodily injury" and "property damage" only if:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 14,
          right_text: '(5) Glass that is a part of a building or structure;',
        },
        {
          left_line: 14,
          left_text:
            '(1) The "bodily injury" or "property damage" is caused by an "occurrence" that takes place in the "coverage territory"; and',
          right_line: 198,
          right_text: '(1) Coverage',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 15,
          right_text: '(6) Fixtures, including outdoor fixtures;',
        },
        {
          left_line: 15,
          left_text:
            '(2) The "bodily injury" or "property damage" occurs during the policy period.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 16,
          right_text: '(7) Permanently installed:',
        },
        {
          left_line: 16,
          left_text:
            'c. Damages because of "bodily injury" include damages claimed by any person or organization for care, loss of services or death resulting at any time from the "bodily injury".',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 17,
          right_text: '(a) Machinery;',
        },
        {
          left_line: 17,
          left_text: '2. Exclusions',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 18,
          right_text: '(b) Equipment;',
        },
        {
          left_line: 18,
          left_text: 'This insurance does not apply to:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 19,
          right_text: '(c) Platforms; and',
        },
        {
          left_line: 19,
          left_text: 'a. Expected or Intended Injury',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 20,
          right_text: '(d) Bins;',
        },
        {
          left_line: 20,
          left_text:
            '"Bodily injury" or "property damage" expected or intended from the standpoint of the insured. This exclusion does not apply to "bodily injury" resulting from the use of reasonable force to protect persons or property.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 21,
          right_text:
            '(8) Personal property owned by you that is used to maintain or service a building or structure, or "covered location", including:',
        },
        {
          left_line: 21,
          left_text: 'b. Contractual Liability',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 22,
          right_text: '(a) Fire extinguishing equipment;',
        },
        {
          left_line: 22,
          left_text:
            '"Bodily injury" or "property damage" for which the insured is obligated to pay damages by reason of the assumption of liability in a contract or agreement. This exclusion does not apply to liability for damages:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 23,
          right_text: '(b) Outdoor furniture;',
        },
        {
          left_line: 23,
          left_text:
            '(1) That the insured would have in the absence of the contract or agreement; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 24,
          right_text: '(c) Floor coverings;',
        },
        {
          left_line: 24,
          left_text:
            '(2) Assumed in a contract or agreement that is an "insured contract", provided the "bodily injury" or "property damage" occurs subsequent to the execution of the contract or agreement. Solely for the purposes of liability assumed in an "insured contract", reasonable attorney fees and necessary litigation expenses incurred by or for a party other than an insured are deemed to be damages because of "bodily injury" or "property damage", provided:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 25,
          right_text:
            '(d) Heating, air conditioning and ventilation equipment; and',
        },
        {
          left_line: 25,
          left_text:
            '(a) Liability to such party for, or for the cost of, that party\'s defense has also been assumed in the same "insured contract"; and',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 26,
          right_text:
            '(e) Appliances used for refrigerating, ventilating, cooking, dishwashing or laundering;',
        },
        {
          left_line: 26,
          left_text:
            '(b) Such attorney fees and litigation expenses are for defense of that party against a civil or alternative dispute resolution proceeding in which damages to which this insurance applies are alleged.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 27,
          right_text:
            '(9) "Builders risk", if not covered by other insurance. With respect to fixtures, machinery and equipment subject to Paragraphs a.(2) and a.(3) of the definition of "builders risk", coverage under this provision also includes your legal liability for similar property belonging to others;',
        },
        {
          left_line: 27,
          left_text: 'c. Liquor Liability',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 28,
          right_text:
            '(10) Awnings and canopies if located within 1,000 feet of a covered building;',
        },
        {
          left_line: 28,
          left_text:
            '"Bodily injury" or "property damage" for which any insured may be held liable by reason of:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 29,
          right_text:
            '(11) Fences (except for pasture and field fences), corrals, pens, chutes and feed racks;',
        },
        {
          left_line: 29,
          left_text:
            '(1) Causing or contributing to the intoxication of any person;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 30,
          right_text:
            '(12) Television and radio towers, antennas, satellite dishes, guy wires, lead-in wiring and masts if the property is located within 1,000 feet of your covered building. Property permanently attached to these types of property is included;',
        },
        {
          left_line: 30,
          left_text:
            '(2) The furnishing of alcoholic beverages to a person under the legal drinking age or under the influence of alcohol; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 31,
          right_text: '(13) Signs;',
        },
        {
          left_line: 31,
          left_text:
            '(3) Any statute, ordinance or regulation relating to the sale, gift, distribution or use of alcoholic beverages.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 32,
          right_text:
            '(14) Foundations of buildings, structures, machinery or boilers;',
        },
        {
          left_line: 32,
          left_text:
            'This exclusion applies only if you are in the business of manufacturing, distributing, selling, serving or furnishing alcoholic beverages.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 33,
          right_text: '(15) Bulkheads, pilings, piers, wharves or docks;',
        },
        {
          left_line: 33,
          left_text: 'd. Workers Compensation and Similar Laws',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 34,
          right_text: '(16) Underground pipes, flues or drains; and',
        },
        {
          left_line: 34,
          left_text:
            'Any obligation of the insured under a workers compensation, disability benefits or unemployment compensation law or any similar law.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 35,
          right_text: '(17) Retaining walls.',
        },
        {
          left_line: 35,
          left_text: "e. Employer's Liability",
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 36,
          right_text:
            'b. Business Personal Property, meaning your Business Personal Property located in or on buildings or structures at "covered locations" or in the open (or in a vehicle) within 1,000 feet of "covered locations", consisting of the following:',
        },
        {
          left_line: 36,
          left_text: '"Bodily injury" to:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 37,
          right_text: '(1) Furniture and fixtures;',
        },
        {
          left_line: 37,
          left_text:
            '(1) An "employee" of the insured arising out of and in the course of:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 38,
          right_text:
            '(2) Machinery and equipment (including irrigation equipment);',
        },
        {
          left_line: 38,
          left_text: '(a) Employment by the insured; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 39,
          right_text: '(3) "Stock";',
        },
        {
          left_line: 39,
          left_text:
            "(b) Performing duties related to the conduct of the insured's business; or",
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 40,
          right_text:
            '(4) Grain, threshed seeds, beans, ground feed, silage, and manufactured and blended "livestock" feed but only while in buildings or structures or in sacks, wagons or trucks;',
        },
        {
          left_line: 40,
          left_text:
            '(2) The spouse, child, parent, brother or sister of that "employee" as a consequence of paragraph (1) above.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 41,
          right_text:
            '(5) Grain in stacks, shocks, swaths or piles in the open, but for this property fire and lightning, windstorm or hail, vandalism, vehicles and theft are the only Covered Causes of Loss;',
        },
        {
          left_line: 41,
          left_text: 'This exclusion applies:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 42,
          right_text:
            '(6) Hay, straw and fodder but only while in buildings or structures;',
        },
        {
          left_line: 42,
          left_text:
            '(1) Whether the insured may be liable as an employer or in any other capacity; and',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 43,
          right_text:
            '(7) Farm products, materials and supplies, other than those provided in Paragraph (4), (5) or (6) above. These include farm materials and related packing materials and containers usual to the "operations" of a farm;',
        },
        {
          left_line: 43,
          left_text:
            '(2) To any obligation to share damages with or repay someone else who must pay damages because of the injury.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 44,
          right_text:
            '(8) All other personal property owned by you and used in your business;',
        },
        {
          left_line: 44,
          left_text:
            'This exclusion does not apply to liability assumed by the insured under an "insured contract".',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 45,
          right_text:
            '(9) Labor, materials or services furnished or arranged by you on personal property of others;',
        },
        {
          left_line: 45,
          left_text: 'f. Pollution',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 46,
          right_text:
            '(10) Your use interest as tenant in improvements and betterments. Improvements and betterments are fixtures, alterations, installations or additions:',
        },
        {
          left_line: 46,
          left_text:
            '(1) "Bodily injury" or "property damage" arising out of the actual, alleged or threatened discharge, dispersal, seepage, migration, release or escape of pollutants:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 47,
          right_text:
            '(a) Made a part of a building or structure you occupy but do not own; and',
        },
        {
          left_line: 47,
          left_text:
            '(a) At or from any premises, site or location which is or was at any time owned or occupied by, or rented or loaned to, any insured;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 48,
          right_text:
            '(b) You acquire or made at your expense but cannot legally remove;',
        },
        {
          left_line: 48,
          left_text:
            '(b) At or from any premises, site or location which is or was at any time used by or for any insured or others for the handling, storage, disposal, processing or treatment of waste;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 49,
          right_text:
            '(11) Personal property, which you lease and have a contractual responsibility to insure;',
        },
        {
          left_line: 49,
          left_text:
            '(c) Which are or were at any time transported, handled, stored, treated, disposed of, or processed as waste by or for any insured or any person or organization for whom you may be legally responsible; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 50,
          right_text:
            '(12) Personal property, which will become part of your installation, erection or fabrication project, while:',
        },
        {
          left_line: 50,
          left_text:
            "(d) At or from any premises, site or location on which any insured or any contractors or subcontractors working directly or indirectly on any insured's behalf are performing operations:",
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 51,
          right_text:
            '(a) At the site of installation, erection or fabrication; or',
        },
        {
          left_line: 51,
          left_text:
            '(i) If the pollutants are brought on or to the premises, site or location in connection with such operations by such insured, contractor or subcontractor; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 52,
          right_text:
            '(b) In temporary storage pending installation, erection or fabrication.',
        },
        {
          left_line: 52,
          left_text:
            '(ii) If the operations are to test for, monitor, clean up, remove, contain, treat, detoxify or neutralize, or in any way respond to, or assess the effects of pollutants.',
          right_line: 231,
          right_text:
            '(b) Any costs associated with the enforcement of an ordinance or law which requires any insured or others to test for, monitor, clean up, remove, contain, treat, detoxify or neutralize, or in any way respond to or assess the effects of "pollutants", "fungi", wet or dry rot.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 53,
          right_text:
            'Coverage under this provision is not restricted to buildings or structures at your "covered location" or within 1,000 feet of a "covered location".',
        },
        {
          left_line: 53,
          left_text:
            'Subparagraph (d)(i) does not apply to "bodily injury" or "property damage" arising out of the escape of fuels, lubricants or other operating fluids which are needed to perform the normal electrical, hydraulic or mechanical functions necessary for the operation of "mobile equipment" or its parts, if such fuels, lubricants or other operating fluids escape from a vehicle part designed to hold, store or receive them. This exception does not apply if the fuels, lubricants or other operating fluids are intentionally discharged, dispersed or released, or if such fuels, lubricants or other operating fluids are brought on or to the premises, site or location with the intent to be discharged, dispersed or released as part of the operations being performed by such insured, contractor or subcontractor.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 54,
          right_text: 'This provision does not apply to "builders risks";',
        },
        {
          left_line: 54,
          left_text:
            'Subparagraphs (a) and (d)(i) do not apply to "bodily injury" or "property damage" arising out of heat, smoke or fumes from a hostile fire.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 55,
          right_text:
            '(13) Personal property of others in your care, custody or control including property sold under an installation agreement by which your responsibility continues until the buyer has accepted the property.',
        },
        {
          left_line: 55,
          left_text:
            'As used in this exclusion, a hostile fire means one which becomes uncontrollable or breaks out from where it was intended to be.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 56,
          right_text:
            'However, our payment for loss of or damage to personal property of others will only be for the account of the owner of the property; and',
        },
        {
          left_line: 56,
          left_text: '(2) Any loss, cost or expense arising out of any:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 57,
          right_text: '(14) "Mobile equipment", including:',
        },
        {
          left_line: 57,
          left_text:
            '(a) Request, demand or order that any insured or others test for, monitor, clean up, remove, contain, treat, detoxify or neutralize, or in any way respond to, or assess the effects of pollutants; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 58,
          right_text:
            '(a) Farm machinery, farm vehicles and related equipment you own, except while in the custody of a common or contract carrier, if not:',
        },
        {
          left_line: 58,
          left_text:
            '(b) Claim or suit by or on behalf of a governmental authority for damages because of testing for, monitoring, cleaning up, removing, containing, treating, detoxifying or neutralizing, or in any way responding to, or assessing the effects of pollutants.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 59,
          right_text: '(1) Covered by other insurance;',
        },
        {
          left_line: 59,
          left_text:
            'Pollutants means any solid, liquid, gaseous or thermal irritant or contaminant, including smoke, vapor, soot, fumes, acids, alkalis, chemicals and waste. Waste includes materials to be recycled, reconditioned or reclaimed.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 60,
          right_text: '(2) Excluded elsewhere in this policy; or',
        },
        {
          left_line: 60,
          left_text: 'g. Aircraft, Auto or Watercraft',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 61,
          right_text: '(3) Scheduled elsewhere in this policy.',
        },
        {
          left_line: 61,
          left_text:
            '"Bodily injury" or "property damage" arising out of the ownership, maintenance, use or entrustment to others of any aircraft, "auto" or watercraft owned or operated by or rented or loaned to any insured. Use includes operation and "loading or unloading".',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 62,
          right_text:
            '(b) Farm machinery, farm vehicles and equipment that you lease, borrow or rent, whether or not under a written contract, except while on the premises of its owner. The leased, borrowed or rented property must be:',
        },
        {
          left_line: 62,
          left_text: 'This exclusion does not apply to:',
          right_line: 254,
          right_text:
            'The insurance that applies to Business Personal Property is extended to apply to Personal Effects owned by you, your officers, your partners or your "employees". This extension does not apply to:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 63,
          right_text: '(1) Usual or incidental to farming "operations";',
        },
        {
          left_line: 63,
          left_text:
            '(1) A watercraft while ashore on premises you own or rent;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 64,
          right_text: '(2) In your care, custody or control; and',
        },
        {
          left_line: 64,
          left_text: '(2) A watercraft you do not own that is:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 65,
          right_text:
            '(3) Personal property in which you have no interest as owner or lienholder.',
        },
        {
          left_line: 65,
          left_text: '(a) Less than 26 feet long; and',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 66,
          right_text:
            'But Covered Property does not include leased, borrowed or rented personal property of the following types:',
        },
        {
          left_line: 66,
          left_text:
            '(b) Not being used to carry persons or property for a charge;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 67,
          right_text:
            '(1) Automobiles, trucks, motorcycles, motorized bicycles or tricycles, mopeds, dirt bikes, snowmobiles, four-wheel all-terrain vehicles; mobile homes, house trailers; vehicles primarily designed and licensed for road use (other than farm wagons and farm trailers); watercraft or aircraft; or the equipment, tires or parts of any of these; or',
        },
        {
          left_line: 67,
          left_text:
            '(3) Parking an "auto" on, or on the ways next to, premises you own or rent, provided the "auto" is not owned by or rented or loaned to you or the insured;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 68,
          right_text:
            "(2) Dealers' demonstration machinery, vehicles or equipment.",
        },
        {
          left_line: 68,
          left_text:
            '(4) Liability assumed under any "insured contract" for the ownership, maintenance or use of aircraft or watercraft; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 69,
          right_text:
            'Coverage for "mobile equipment" under this paragraph is provided anywhere in the Coverage Territory.',
        },
        {
          left_line: 69,
          left_text:
            '(5) "Bodily injury" or "property damage" arising out of the operation of any of the equipment listed in paragraph f.(2) or f.(3) of the definition of "mobile equipment".',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 70,
          right_text:
            'However, cotton pickers and harvester-thresher combines are not covered "mobile equipment" unless specifically declared and described in the Scheduled Mobile Equipment endorsement.',
        },
        {
          left_line: 70,
          left_text: 'h. Mobile Equipment',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 71,
          right_text: 'c. Household Personal Property meaning:',
        },
        {
          left_line: 71,
          left_text: '"Bodily injury" or "property damage" arising out of:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 72,
          right_text:
            '(1) Your Household Personal Property located in or on "dwellings" or their appurtenant structures at "covered locations" or in the open (or in a vehicle) within 1,000 feet of "covered locations"; and',
        },
        {
          left_line: 72,
          left_text:
            '(1) The transportation of "mobile equipment" by an "auto" owned or operated by or rented or loaned to any insured; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 73,
          right_text: '(2) If you are an individual:',
        },
        {
          left_line: 73,
          left_text:
            '(2) The use of "mobile equipment" in, or while in practice for, or while being prepared for, any prearranged racing, speed, demolition, or stunting activity.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 74,
          right_text:
            '(a) Household Personal Property owned by any "family member" while such property is at the "covered location"; and',
        },
        {
          left_line: 74,
          left_text: 'i. War',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 75,
          right_text:
            '(b) After a loss and at your request, Household Personal Property of others while such property is:',
        },
        {
          left_line: 75,
          left_text:
            '"Bodily injury" or "property damage" due to war, whether or not declared, or any act or condition incident to war. War includes civil war, insurrection, rebellion or revolution. This exclusion applies only to liability assumed under a contract or agreement.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 76,
          right_text: '(i) In a part of the "dwelling" where you reside; or',
        },
        {
          left_line: 76,
          left_text: 'j. Damage to Property',
          right_line: 326,
          right_text:
            '(a) If the loss which resulted in "fungi" or wet or dry rot does not in itself necessitate a "suspension" of "operations", but such "suspension" is necessary due to the loss or damage to property caused by "fungi" or wet or dry rot, then our payment under Business Income And Extra Expense/Dwelling Loss Of Use is limited to the amount of loss and/or expense sustained in a period of not more than 90 days unless another number of days is indicated in the Declarations. The days need not be consecutive.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 77,
          right_text: '(ii) On the grounds appurtenant to that "dwelling".',
        },
        {
          left_line: 77,
          left_text: '"Property damage" to:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 78,
          right_text:
            'However, this provision does not apply to Household Personal Property described in Paragraph (1) or (2)(a) above.',
        },
        {
          left_line: 78,
          left_text: '(1) Property you own, rent, or occupy;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 79,
          right_text:
            'Household Personal Property does not include Business Personal Property.',
        },
        {
          left_line: 79,
          left_text:
            '(2) Premises you sell, give away or abandon, if the "property damage" arises out of any part of those premises;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 80,
          right_text: '2. Property Not Covered',
        },
        {
          left_line: 80,
          left_text: '(3) Property loaned to you;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 81,
          right_text: 'Covered Property does not include:',
        },
        {
          left_line: 81,
          left_text:
            '(4) Personal property in the care, custody or control of the insured;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 82,
          right_text:
            'a. Accounts, bills, currency, food stamps, other evidences of debt, "money", notes, "securities" or "valuable papers and records"; except as specifically provided elsewhere in this policy;',
        },
        {
          left_line: 82,
          left_text:
            '(5) That particular part of real property on which you or any contractors or subcontractors working directly or indirectly on your behalf are performing operations, if the "property damage" arises out of those operations; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 83,
          right_text:
            'b. Aircraft and watercraft (except rowboats or canoes while out of water at your "covered location"), including their equipment or parts;',
        },
        {
          left_line: 83,
          left_text:
            '(6) That particular part of any property that must be restored, repaired or replaced because "your work" was incorrectly performed on it.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 84,
          right_text:
            'c. "Livestock" and "poultry", except as specifically provided elsewhere in this policy. However, this provision does not include "livestock" or "poultry" that have been slaughtered for use in a manufacturing or processing operation;',
        },
        {
          left_line: 84,
          left_text:
            'Paragraph (2) of this exclusion does not apply if the premises are "your work" and were never occupied, rented or held for rental by you.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 85,
          right_text:
            'd. Automobiles, motorcycles, motortrucks, motor homes, tractors, "mobile equipment" and similar vehicles, held for sale, lease, loan or rent;',
        },
        {
          left_line: 85,
          left_text:
            'Paragraphs (3), (4), (5) and (6) of this exclusion do not apply to liability assumed under a sidetrack agreement.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 86,
          right_text:
            'e. Business Personal Property and Household Personal Property while airborne or waterborne except when regularly scheduled airlines or ferry services are transporting the property;',
        },
        {
          left_line: 86,
          left_text:
            'Paragraph (6) of this exclusion does not apply to "property damage" included in the "products-completed operations hazard".',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 87,
          right_text: 'f. Bridges and roadways;',
        },
        {
          left_line: 87,
          left_text: 'k. Damage to Your Product',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 88,
          right_text:
            'g. Walks, patios and driveways except those that are appurtenant to a "dwelling";',
        },
        {
          left_line: 88,
          left_text:
            '"Property damage" to "your product" arising out of it or any part of it.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 89,
          right_text:
            'h. Contents of chicken fryer or broiler houses, laying houses, "poultry" brooder, duck or turkey houses, except as specifically provided elsewhere in this policy;',
        },
        {
          left_line: 89,
          left_text: 'l. Damage to Your Work',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 90,
          right_text:
            'i. Contraband, or property in the course of illegal transportation or trade;',
        },
        {
          left_line: 90,
          left_text:
            '"Property damage" to "your work" arising out of it or any part of it and included in the "products-completed operations hazard".',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 91,
          right_text:
            'j. The cost of excavations, grading, backfilling or filling unless needed to repair, rebuild or replace Covered Property. However, any and all costs associated with land stabilization and land reconstruction are excluded;',
        },
        {
          left_line: 91,
          left_text:
            'This exclusion does not apply if the damaged work or the work out of which the damage arises was performed on your behalf by a subcontractor.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 92,
          right_text:
            'k. "Electronic data", except as specifically provided under Additional Coverages - Electronic Data. This Paragraph, A.2.k., does not apply to your "stock" of prepackaged software;',
        },
        {
          left_line: 92,
          left_text:
            'm. Damage to Impaired Property or Property Not Physically Injured',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 93,
          right_text:
            'l. Exported and imported property that is covered under an ocean marine cargo insurance policy or similar policy obtained by anyone to cover exports and imports;',
        },
        {
          left_line: 93,
          left_text:
            '"Property damage" to "impaired property" or property that has not been physically injured, arising out of:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 94,
          right_text:
            'm. "Fine arts", except as specifically provided elsewhere in this policy;',
        },
        {
          left_line: 94,
          left_text:
            '(1) A defect, deficiency, inadequacy or dangerous condition in "your product" or "your work"; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 95,
          right_text: 'n. The following harvested crops:',
        },
        {
          left_line: 95,
          left_text:
            '(2) A delay or failure by you or anyone acting on your behalf to perform a contract or agreement in accordance with its terms.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 96,
          right_text:
            '(1) Tobacco, cotton, vegetables, root crops, potatoes, bulbs, fruits and nursery "stock" unless a specific Limit Of Insurance is shown in the Declarations for such property;',
        },
        {
          left_line: 96,
          left_text:
            'This exclusion does not apply to the loss of use of other property arising out of sudden and accidental physical injury to "your product" or "your work" after it has been put to its intended use.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 97,
          right_text:
            '(2) Hay, straw and fodder in stacks, windrows or bales outside of buildings except as provided in Additional Coverage A.3.o., Hay, Straw, Fodder Outside; and',
        },
        {
          left_line: 97,
          left_text: 'n. Recall of Products, Work or Impaired Property',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 98,
          right_text:
            '(3) Any other harvested crops which are outside of buildings, except as specifically provided elsewhere in this policy;',
        },
        {
          left_line: 98,
          left_text:
            'Damages claimed for any loss, cost or expense incurred by you or others for the loss of use, withdrawal, recall, inspection, repair, replacement, adjustment, removal or disposal of:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 99,
          right_text:
            'o. Grave markers and mausoleums, except as specifically provided elsewhere in this policy;',
        },
        {
          left_line: 99,
          left_text: '(1) "Your product";',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 100,
          right_text:
            'p. Land (including land on which the property is located), water, growing crops or lawns;',
        },
        {
          left_line: 100,
          left_text: '(2) "Your work"; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 101,
          right_text:
            'q. Property in transit, except as specifically provided elsewhere in this policy;',
        },
        {
          left_line: 101,
          left_text: '(3) "Impaired property";',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 102,
          right_text:
            'r. Property that is covered under another insurance form of this or any other policy in which it is more specifically described, except for the excess of the amount due (whether you can collect on it or not) from that other insurance.',
        },
        {
          left_line: 102,
          left_text:
            'if such product, work, or property is withdrawn or recalled from the market or from use by any person or organization because of a known or suspected defect, deficiency, inadequacy or dangerous condition in it.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 103,
          right_text:
            'This Paragraph r. does not apply to borrowed farm machinery, farm vehicles and equipment to which Paragraph A.1.b.(14)(b) applies;',
        },
        {
          left_line: 103,
          left_text:
            'Exclusions c. through n. do not apply to damage by fire to premises while rented to you or temporarily occupied by you with permission of the owner. A separate limit of insurance applies to this coverage as described in LIMITS OF INSURANCE (Section III).',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 104,
          right_text:
            's. Property of others for which you have responsibility as a carrier for hire or as a broker, carloader, consolidator, freight forwarder, shipping association or similar arranger of transportation operation, except as specifically provided elsewhere in this policy;',
        },
        {
          left_line: 104,
          left_text: 'COVERAGE B. PERSONAL AND ADVERTISING INJURY LIABILITY',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 105,
          right_text:
            't. Property you have sold and delivered, except for property you have sold with an installation agreement;',
        },
        {
          left_line: 105,
          left_text: '1. Insuring Agreement',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 106,
          right_text:
            'u. Property you have sold under an installment sales contract or similar agreement or "leased property", except as specifically provided elsewhere in this policy;',
        },
        {
          left_line: 106,
          left_text:
            'a. We will pay those sums that the insured becomes legally obligated to pay as damages because of "personal injury" or "advertising injury" to which this insurance applies. We will have the right and duty to defend the insured against any "suit" seeking those damages. However, we will have no duty to defend the insured against any "suit" seeking damages for "personal injury" or "advertising injury" to which this insurance does not apply. We may, at our discretion, investigate any "occurrence" or offense and settle any claim or "suit" that may result. But:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 107,
          right_text:
            'v. Trees, shrubs and plants, except as specifically provided elsewhere in this policy;',
        },
        {
          left_line: 107,
          left_text:
            '(1) The amount we will pay for damages is limited as described in LIMITS OF INSURANCE (SECTION III); and',
          right_line: 374,
          right_text: '(1) We will pay:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 108,
          right_text:
            'w. Vehicles or self-propelled machines that are licensed for use on public roads. This paragraph does not apply to:',
        },
        {
          left_line: 108,
          left_text:
            '(2) Our right and duty to defend end when we have used up the applicable limit of insurance in the payment of judgments or settlements under Coverages A or B or medical expenses under Coverage C.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 109,
          right_text:
            '(1) Vehicles, self-propelled machines or autos you manufacture, process or warehouse; or',
        },
        {
          left_line: 109,
          left_text:
            'No other obligation or liability to pay sums or perform acts or services is covered unless explicitly provided for under SUPPLEMENTARY PAYMENTS - COVERAGES A AND B.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 110,
          right_text:
            '(2) Vehicles or self-propelled machines you hold for sale, lease, loan or rent other than those excluded in Paragraph A.2.d.',
        },
        {
          left_line: 110,
          left_text: 'b. This insurance applies to:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 111,
          right_text:
            'x. Eggs, except as specifically provided elsewhere in this policy; and',
        },
        {
          left_line: 111,
          left_text:
            '(1) "Personal injury" caused by an offense arising out of your business, excluding advertising, publishing, broadcasting or telecasting done by or for you;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 112,
          right_text:
            'y. Nursery "stock" unless a specific Limit Of Insurance is shown in the Declarations for such property.',
        },
        {
          left_line: 112,
          left_text:
            '(2) "Advertising injury" caused by an offense committed in the course of advertising your goods, products or services;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 113,
          right_text: '3. Additional Coverages',
        },
        {
          left_line: 113,
          left_text:
            'but only if the offense was committed in the "coverage territory" during the policy period.',
          right_line: 389,
          right_text: '(1) Coverage',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 114,
          right_text:
            'The Limit(s) of Insurance shown in Paragraph A.3., Additional Coverages are provided within, not in addition to, the Limit Of Insurance stated in the Declarations or the Scheduled Location endorsement as applicable to the Covered Property, except with respect to Automatic Increase Additional Coverage in Paragraph A.3.c.',
        },
        {
          left_line: 114,
          left_text: '2. Exclusions',
          right_line: 418,
          right_text: '(5) Additional Exclusions',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 115,
          right_text: 'a. Brands And Labels Expense',
        },
        {
          left_line: 115,
          left_text: 'This insurance does not apply to:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 116,
          right_text:
            'If branded or labeled merchandise that is Covered Property is damaged by a Covered Cause of Loss, we may take all or any part of the property at an agreed or appraised value. If so, we will pay reasonable expenses you incur to:',
        },
        {
          left_line: 116,
          left_text: 'a. "Personal injury" or "advertising injury":',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 117,
          right_text:
            '(1) Stamp the word salvage on the merchandise or its containers, if the stamp will not physically damage the merchandise; or',
        },
        {
          left_line: 117,
          left_text:
            '(1) Arising out of oral or written publication of material, if done by or at the direction of the insured with knowledge of its falsity;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 118,
          right_text:
            '(2) Remove the brands or labels, if doing so will not physically damage the merchandise. You must relabel the merchandise or its containers to comply with the law.',
        },
        {
          left_line: 118,
          left_text:
            '(2) Arising out of oral or written publication of material whose first publication took place before the beginning of the policy period;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 119,
          right_text: 'b. Debris Removal',
        },
        {
          left_line: 119,
          left_text:
            '(3) Arising out of the willful violation of a penal statute or ordinance committed by or with the consent of the insured;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 120,
          right_text:
            '(1) Subject to Paragraphs (2), (3) and (4), we will pay your expense to remove debris of Covered Property caused by or resulting from a Covered Cause of Loss that occurs during the policy period. The expenses will be paid only if they are reported to us in writing within 180 days of the date of direct physical loss or damage.',
        },
        {
          left_line: 120,
          left_text:
            '(4) For which the insured has assumed liability in a contract or agreement. This exclusion does not apply to liability for damages that the insured would have in the absence of the contract or agreement; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 121,
          right_text: '(2) Debris Removal does not apply to costs to:',
        },
        {
          left_line: 121,
          left_text:
            '(5) Arising out of the actual, alleged or threatened discharge, dispersal, seepage, migration, release or escape of pollutants at any time.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 122,
          right_text: '(a) Extract "pollutants" from land or water; or',
        },
        {
          left_line: 122,
          left_text: 'b. "Advertising injury" arising out of:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 123,
          right_text: '(b) Remove, restore or replace polluted land or water.',
        },
        {
          left_line: 123,
          left_text:
            '(1) Breach of contract, other than misappropriation of advertising ideas under an implied contract;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 124,
          right_text:
            '(3) Subject to the exceptions in Paragraph (4), the following provisions apply:',
        },
        {
          left_line: 124,
          left_text:
            '(2) The failure of goods, products or services to conform with advertised quality or performance;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 125,
          right_text:
            '(a) The most we will pay for the total of direct physical loss or damage plus debris removal expense is the Limit of Insurance applicable to the Covered Property that has sustained loss or damage.',
        },
        {
          left_line: 125,
          left_text:
            '(3) The wrong description of the price of goods, products or services; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 126,
          right_text:
            '(b) Subject to Paragraph (3)(a) above, the amount we will pay for debris removal expense is limited to 25% of the sum of the deductible plus the amount that we pay for direct physical loss or damage to the Covered Property that has sustained loss or damage.',
        },
        {
          left_line: 126,
          left_text:
            '(4) An offense committed by an insured whose business is advertising, broadcasting, publishing or telecasting.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 127,
          right_text:
            '(4) We will pay up to an additional $50,000, unless a different Limit Of Insurance is shown in the Declarations, for debris removal expense, for each location, in any one occurrence of physical loss or damage to Covered Property, if one or both of the following circumstances apply:',
        },
        {
          left_line: 127,
          left_text: 'c. Any loss, cost or expense arising out of any:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 128,
          right_text:
            '(a) The total of the actual debris removal expense plus the amount we pay for direct physical loss or damage exceeds the Limit of Insurance on the Covered Property that has sustained loss or damage.',
        },
        {
          left_line: 128,
          left_text:
            '(1) Request, demand or order that any insured or others test for, monitor, clean up, remove, contain, treat, detoxify or neutralize, or in any way respond to, or assess the effects of pollutants; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 129,
          right_text:
            '(b) The actual debris removal expense exceeds 25% of the sum of the deductible plus the amount that we pay for direct physical loss or damage to the Covered Property that has sustained loss or damage.',
        },
        {
          left_line: 129,
          left_text:
            '(2) Claim or suit by or on behalf of a governmental authority for damages because of testing for, monitoring, cleaning up, removing, containing, treating, detoxifying or neutralizing, or in any way responding to, or assessing the effects of pollutants.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 130,
          right_text:
            'Therefore, if Paragraph (4)(a) and/or Paragraph (4)(b) apply, our total payment for direct physical loss or damage and debris removal expense may reach but will never exceed the Limit of Insurance on the Covered Property that has sustained loss or damage, plus $50,000.',
        },
        {
          left_line: 130,
          left_text:
            'Pollutants means any solid, liquid, gaseous or thermal irritant or contaminant, including smoke, vapor, soot, fumes, acids, alkalis, chemicals and waste. Waste includes materials to be recycled, reconditioned or reclaimed.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 131,
          right_text: '(5) Examples',
        },
        {
          left_line: 131,
          left_text: 'COVERAGE C. MEDICAL PAYMENTS',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 132,
          right_text:
            'The following examples assume that there is no coinsurance penalty:',
        },
        {
          left_line: 132,
          left_text: '1. Insuring Agreement',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 133,
          right_text: 'EXAMPLE NO. 1:',
        },
        {
          left_line: 133,
          left_text:
            'a. We will pay medical expenses as described below for "bodily injury" caused by an accident:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: 134,
          left_text: '(1) On premises you own or rent;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 135,
          right_text: '980,000',
        },
        {
          left_line: 135,
          left_text: '(2) On ways next to premises you own or rent; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 136,
          right_text: 'Amount of Loss',
        },
        {
          left_line: 136,
          left_text: '(3) Because of your operations;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 137,
          right_text: '$',
        },
        {
          left_line: 137,
          left_text: 'provided that:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 138,
          right_text: '550,000',
        },
        {
          left_line: 138,
          left_text:
            '(1) The accident takes place in the "coverage territory" and during the policy period;',
          right_line: 435,
          right_text: '(i) Coverage Territory',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 139,
          right_text: 'Amount of Deductible',
        },
        {
          left_line: 139,
          left_text:
            '(2) The expenses are incurred and reported to us within one year of the date of the accident; and',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 140,
          right_text: '$',
        },
        {
          left_line: 140,
          left_text:
            '(3) The injured person submits to examination, at our expense, by physicians of our choice as often as we reasonably require.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 141,
          right_text: '5,000',
        },
        {
          left_line: 141,
          left_text:
            'b. We will make these payments regardless of fault. These payments will not exceed the applicable limit of insurance. We will pay reasonable expenses for:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 142,
          right_text: 'Amount of Loss Payable',
        },
        {
          left_line: 142,
          left_text: '(1) First aid administered at the time of an accident;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 143,
          right_text: '$',
        },
        {
          left_line: 143,
          left_text:
            '(2) Necessary medical, surgical, x-ray and dental services, including prosthetic devices; and',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 144,
          right_text: '545,000',
        },
        {
          left_line: 144,
          left_text:
            '(3) Necessary ambulance, hospital, professional nursing and funeral services.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 145,
          right_text: '($550,000 - $5,000)',
        },
        {
          left_line: 145,
          left_text: '2. Exclusions',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 146,
          right_text: 'Debris Removal Expense',
        },
        {
          left_line: 146,
          left_text: 'We will not pay expenses for "bodily injury":',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 147,
          right_text: '$',
        },
        {
          left_line: 147,
          left_text: 'a. To any insured.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 148,
          right_text: '50,000',
        },
        {
          left_line: 148,
          left_text:
            'b. To a person hired to do work for or on behalf of any insured or a tenant of any insured.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 149,
          right_text: 'Debris Removal Expense Payable',
        },
        {
          left_line: 149,
          left_text:
            'c. To a person injured on that part of premises you own or rent that the person normally occupies.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 150,
          right_text: '$',
        },
        {
          left_line: 150,
          left_text:
            'd. To a person, whether or not an "employee" of any insured, if benefits for the "bodily injury" are payable or must be provided under a workers compensation or disability benefits law or a similar law.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 151,
          right_text: '50,000',
        },
        {
          left_line: 151,
          left_text: 'e. To a person injured while taking part in athletics.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 152,
          right_text:
            '($50,000 is less than the 25% of $550,000 as required in Paragraph (3)(b))',
        },
        {
          left_line: 152,
          left_text:
            'f. Included within the "products-completed operations hazard".',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 153,
          right_text:
            'The sum of the loss payable and the debris removal expense ($545,000 + $50,000 = $595,000) is less than the Limit of Insurance. Therefore the full amount of debris removal expense is payable in accordance with the terms of Paragraph (3).',
        },
        {
          left_line: 153,
          left_text: 'g. Excluded under Coverage A.',
          right_line: 441,
          right_text: '(1) Coverage',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 154,
          right_text: 'EXAMPLE NO. 2:',
        },
        {
          left_line: 154,
          left_text:
            'h. Due to war, whether or not declared, or any act or condition incident to war. War includes civil war, insurrection, rebellion or revolution.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: 155,
          left_text: 'SUPPLEMENTARY PAYMENTS - COVERAGES A AND B',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 156,
          right_text: '990,000',
        },
        {
          left_line: 156,
          left_text:
            'We will pay, with respect to any claim we investigate or settle, or any "suit" against an insured we defend:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 157,
          right_text: 'Amount of Loss',
        },
        {
          left_line: 157,
          left_text: '1. All expenses we incur.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 158,
          right_text: '$',
        },
        {
          left_line: 158,
          left_text:
            '2. Up to $250 for cost of bail bonds required because of accidents or traffic law violations arising out of the use of any vehicle to which the Bodily Injury Liability Coverage applies. We do not have to furnish these bonds.',
          right_line: 450,
          right_text: 'Coverage applies:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 159,
          right_text: '980,000',
        },
        {
          left_line: 159,
          left_text:
            '3. The cost of bonds to release attachments, but only for bond amounts within the applicable limit of insurance. We do not have to furnish these bonds.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 160,
          right_text: 'Amount of Deductible',
        },
        {
          left_line: 160,
          left_text:
            '4. All reasonable expenses incurred by the insured at our request to assist us in the investigation or defense of the claim or "suit", including actual loss of earnings up to $250 a day because of time off from work.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 161,
          right_text: '$',
        },
        {
          left_line: 161,
          left_text: '5. All costs taxed against the insured in the "suit".',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 162,
          right_text: '5,000',
        },
        {
          left_line: 162,
          left_text:
            '6. Prejudgment interest awarded against the insured on that part of the judgment we pay. If we make an offer to pay the applicable limit of insurance, we will not pay any prejudgment interest based on that period of time after the offer.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 163,
          right_text: 'Amount of Loss Payable',
        },
        {
          left_line: 163,
          left_text:
            '7. All interest on the full amount of any judgment that accrues after entry of the judgment and before we have paid, offered to pay, or deposited in court the part of the judgment that is within the applicable limit of insurance.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 164,
          right_text: '$',
        },
        {
          left_line: 164,
          left_text: 'These payments will not reduce the limits of insurance.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 165,
          right_text: '975,000',
        },
        {
          left_line: 165,
          left_text:
            'If we defend an insured against a "suit" and an indemnitee of the insured is also named as a party to the "suit", we will defend that indemnitee if all of the following conditions are met:',
          right_line: 464,
          right_text: 'If:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 166,
          right_text: '($980,000 - $5,000)',
        },
        {
          left_line: 166,
          left_text:
            'a. The "suit" against the indemnitee seeks damages for which the insured has assumed the liability of the indemnitee in a contract or agreement that is an "insured contract";',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 167,
          right_text: 'Debris Removal Expense',
        },
        {
          left_line: 167,
          left_text:
            'b. This insurance applies to such liability assumed by the insured;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 168,
          right_text: '$',
        },
        {
          left_line: 168,
          left_text:
            'c. The obligation to defend, or the cost of the defense of, that indemnitee, has also been assumed by the insured in the same "insured contract";',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 169,
          right_text: '380,000',
        },
        {
          left_line: 169,
          left_text:
            'd. The allegations in the "suit" and the information we know about the "occurrence" are such that no conflict appears to exist between the interests of the insured and the interests of the indemnitee;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 170,
          right_text: 'Basic Amount Payable for Debris Removal Expense',
        },
        {
          left_line: 170,
          left_text:
            'e. The indemnitee and the insured ask us to conduct and control the defense of that indemnitee against such "suit" and agree that we can assign the same counsel to defend the insured and the indemnitee; and',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 171,
          right_text: '$',
        },
        {
          left_line: 171,
          left_text: 'f. The indemnitee:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 172,
          right_text: '15,000',
        },
        {
          left_line: 172,
          left_text: '(1) Agrees in writing to:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 173,
          right_text: 'Additional Amount Payable for Debris Removal Expense',
        },
        {
          left_line: 173,
          left_text:
            '(a) Cooperate with us in the investigation, settlement or defense of the "suit";',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 174,
          right_text: '$',
        },
        {
          left_line: 174,
          left_text:
            '(b) Immediately send us copies of any demands, notices, summonses or legal papers received in connection with the "suit";',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 175,
          right_text: '50,000',
        },
        {
          left_line: 175,
          left_text:
            '(c) Notify any other insurer whose coverage is available to the indemnitee; and',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 176,
          right_text:
            'The basic amount payable for debris removal expense under the terms of Paragraph (3) is calculated as follows: $980,000 ($975,000 + $5,000) x .25 = $245,000; capped at $15,000. The cap applies because the sum of the loss payable ($975,000) and the basic amount payable for debris removal expense ($15,000) cannot exceed the Limit of Insurance ($990,000).',
        },
        {
          left_line: 176,
          left_text:
            '(d) Cooperate with us with respect to coordinating other applicable insurance available to the indemnitee; and',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 177,
          right_text:
            'The additional amount payable for debris removal expense is provided in accordance with the terms of Paragraph (4), because the debris removal expense ($380,000) exceeds 25% of the loss payable plus the deductible ($380,000 is 38.8% of $980,000), and because the sum of the loss payable and debris removal expense ($975,000 + $380,000 = $1,355,000) would exceed the Limit of Insurance ($990,000). The additional amount of covered debris removal expense is $50,000, the maximum payable under Paragraph (4). Thus the total payable for debris removal expense in this example is $65,000; $315,000 of the debris removal expense is not covered.',
        },
        {
          left_line: 177,
          left_text: '(2) Provides us with written authorization to:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 178,
          right_text: 'c. Automatic Increase',
        },
        {
          left_line: 178,
          left_text:
            '(a) Obtain records and other information related to the "suit"; and',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 179,
          right_text: '(1) The Limit(s) of Insurance for:',
        },
        {
          left_line: 179,
          left_text:
            '(b) Conduct and control the defense of the indemnitee in such "suit".',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 180,
          right_text: '(a) Building and Business Personal Property; and',
        },
        {
          left_line: 180,
          left_text:
            'So long as the above conditions are met, attorneys fees incurred by us in the defense of that indemnitee, necessary litigation expenses incurred by us and necessary litigation expenses incurred by the indemnitee at our request will be paid as Supplementary Payments. Notwithstanding the provisions of paragraph 2.b.(2) of COVERAGE A - BODILY INJURY AND PROPERTY DAMAGE LIABILITY (Section I - Coverages), such payments will not be deemed to be damages for "bodily injury" and "property damage" and will not reduce the limits of insurance.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 181,
          right_text: '(b) Household Personal Property,',
        },
        {
          left_line: 181,
          left_text:
            "Our obligation to defend an insured's indemnitee and to pay for attorneys fees and necessary litigation expenses as Supplementary Payments ends when:",
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 182,
          right_text:
            'will automatically increase by 2% annually unless a different percentage is shown as applicable in the Declarations, Scheduled Location endorsement or Scheduled Mobile Equipment endorsement.',
        },
        {
          left_line: 182,
          left_text:
            'a. We have used up the applicable limit of insurance in the payment of judgments or settlements; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 183,
          right_text: '(2) The amount of the increase will be:',
        },
        {
          left_line: 183,
          left_text:
            'b. The conditions set forth above, or the terms of the agreement described in paragraph f. above, are no longer met.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 184,
          right_text:
            '(a) The Limit of Insurance that applied on the most recent of the policy inception date, the policy anniversary date, or any other policy change amending the Limit of Insurance, times',
        },
        {
          left_line: 184,
          left_text: 'SECTION II - WHO IS AN INSURED',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 185,
          right_text:
            '(b) The 2% annual increase or the percentage of annual increase shown in the Declarations, Scheduled Location endorsement or Scheduled Mobile Equipment endorsement expressed as a decimal (example: 2% is .02), times',
        },
        {
          left_line: 185,
          left_text: '1. If you are designated in the Declarations as:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 186,
          right_text:
            '(c) The number of days since the beginning of the current policy year or the effective date of the most recent policy change amending the Limit of Insurance, divided by 365.',
        },
        {
          left_line: 186,
          left_text:
            'a. An individual, you and your spouse are insureds, but only with respect to the conduct of a business of which you are the sole owner.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 187,
          right_text: 'EXAMPLE',
        },
        {
          left_line: 187,
          left_text:
            'b. A partnership or joint venture, you are an insured. Your members, your partners, and their spouses are also insureds, but only with respect to the conduct of your business.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 188,
          right_text: 'The applicable Limit of Insurance is $100,000',
        },
        {
          left_line: 188,
          left_text:
            'c. A limited liability company, you are an insured. Your members are also insureds, but only with respect to the conduct of your business. Your managers are insureds, but only with respect to their duties as your managers.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 189,
          right_text: 'The annual percentage increase is 2%',
        },
        {
          left_line: 189,
          left_text:
            'd. An organization other than a partnership, joint venture or limited liability company, you are an insured. Your "executive officers" and directors are insureds, but only with respect to their duties as your officers or directors. Your stockholders are also insureds, but only with respect to their liability as stockholders.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 190,
          right_text:
            'The number of days since the beginning of the policy year (or last policy change) is 146',
        },
        {
          left_line: 190,
          left_text: '2. Each of the following is also an insured:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 191,
          right_text:
            'The amount of the increase is $100,000 x .02 x 146 365 = $800',
        },
        {
          left_line: 191,
          left_text:
            'a. Your "employees", other than either your "executive officers" (if you are an organization other than a partnership, joint venture or limited liability company) or your managers (if you are a limited liability company), but only for acts within the scope of their employment by you or while performing duties related to the conduct of your business. However, none of these "employees" is an insured for:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 192,
          right_text: 'd. Fire Department Service Charge',
        },
        {
          left_line: 192,
          left_text: '(1) "Bodily injury" or "personal injury":',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 193,
          right_text:
            'When the fire department is called to save or protect Covered Property from a Covered Cause of Loss, we will pay up to $10,000, unless a different Limit Of Insurance is shown in the Declarations, for your liability for fire department service charges:',
        },
        {
          left_line: 193,
          left_text:
            '(a) To you, to your partners or members (if you are a partnership or joint venture), to your members (if you are a limited liability company), or to a co-"employee" while that co-"employee" is either in the course of his or her employment or performing duties related to the conduct of your business;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 194,
          right_text: '(1) Assumed by contract or agreement prior to loss; or',
        },
        {
          left_line: 194,
          left_text:
            '(b) To the spouse, child, parent, brother or sister of that co-"employee" as a consequence of paragraph (1)(a) above;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 195,
          right_text: '(2) Required by local ordinance.',
        },
        {
          left_line: 195,
          left_text:
            '(c) For which there is any obligation to share damages with or repay someone else who must pay damages because of the injury described in paragraphs (1)(a) or (b) above; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 196,
          right_text: 'No deductible applies to this additional coverage.',
        },
        {
          left_line: 196,
          left_text:
            '(d) Arising out of his or her providing or failing to provide professional health care services.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 197,
          right_text: 'e. Ordinance Or Law',
        },
        {
          left_line: 197,
          left_text: '(2) "Property damage" to property:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: 198,
          left_text: '(a) Owned, occupied or used by,',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 199,
          right_text: 'This coverage is subject to Paragraph A.3.e.(2)(c):',
        },
        {
          left_line: 199,
          left_text:
            '(b) Rented to, in the care, custody or control of, or over which physical control is being exercised for any purpose by',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 200,
          right_text:
            '(a) Coverage A - Coverage For Loss To The Undamaged Portion Of The Building',
        },
        {
          left_line: 200,
          left_text:
            'you, any of your "employees", any partner or member (if you are a partnership or joint venture), or any member (if you are a limited liability company).',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 201,
          right_text:
            'With respect to the building that has sustained covered direct physical damage, we will pay under Coverage A for the loss in value of the undamaged portion of the building as a consequence of enforcement of an ordinance or law that requires demolition of undamaged parts of the same building.',
        },
        {
          left_line: 201,
          left_text:
            'b. Any person (other than your "employee"), or any organization while acting as your real estate manager.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 202,
          right_text: '(b) Coverage B - Demolition Cost Coverage',
        },
        {
          left_line: 202,
          left_text:
            'c. Any person or organization having proper temporary custody of your property if you die, but only:',
          right_line: 472,
          right_text: 'property is',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 203,
          right_text:
            'With respect to the building that has sustained covered direct physical damage, we will pay the cost to demolish the building and clear the site of undamaged parts of the same building, as a consequence of enforcement of an ordinance or law that requires demolition of such undamaged property.',
        },
        {
          left_line: 203,
          left_text:
            '(1) With respect to liability arising out of the maintenance or use of that property; and',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 204,
          right_text:
            'The most we will pay for loss or damage under this additional coverage is $100,000 per occurrence, unless a different Limit Of Insurance is shown in the Declarations.',
        },
        {
          left_line: 204,
          left_text: '(2) Until your legal representative has been appointed.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 205,
          right_text: 'Coinsurance does not apply to this coverage.',
        },
        {
          left_line: 205,
          left_text:
            'd. Your legal representative if you die, but only with respect to duties as such. That representative will have all your rights and duties under this Coverage Part.',
          right_line: 485,
          right_text: '(1) Coverage',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 206,
          right_text:
            '(c) Coverage C - Increased Cost Of Construction Coverage',
        },
        {
          left_line: 206,
          left_text:
            '3. With respect to "mobile equipment" registered in your name under any motor vehicle registration law, any person is an insured while driving such equipment along a public highway with your permission. Any other person or organization responsible for the conduct of such person is also an insured, but only with respect to liability arising out of the operation of the equipment, and only if no other insurance of any kind is available to that person or organization for this liability. However, no person or organization is an insured with respect to:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 207,
          right_text:
            'With respect to the building that has sustained covered direct physical damage, we will pay the increased cost to:',
        },
        {
          left_line: 207,
          left_text:
            'a. "Bodily injury" to a co-"employee" of the person driving the equipment; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 208,
          right_text:
            '(i) Repair or reconstruct damaged portions of that building; and/or',
        },
        {
          left_line: 208,
          left_text:
            'b. "Property damage" to property owned by, rented to, in the charge of or occupied by you or the employer of any person who is an insured under this provision.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 209,
          right_text:
            '(ii) Reconstruct or remodel undamaged portions of that building, whether or not demolition is required;',
        },
        {
          left_line: 209,
          left_text:
            '4. Any organization you newly acquire or form, other than a partnership, joint venture or limited liability company, and over which you maintain ownership or majority interest, will qualify as a Named Insured if there is no other similar insurance available to that organization. However:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 210,
          right_text:
            'when the increased cost is a consequence of enforcement of the minimum requirements of the ordinance or law.',
        },
        {
          left_line: 210,
          left_text:
            'a. Coverage under this provision is afforded only until the 90th day after you acquire or form the organization or the end of the policy period, whichever is earlier;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 211,
          right_text: 'However:',
        },
        {
          left_line: 211,
          left_text:
            'b. Coverage A does not apply to "bodily injury" or "property damage" that occurred before you acquired or formed the organization; and',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 212,
          right_text:
            '(iii) This coverage applies only if the restored or remodeled property is intended for similar occupancy as the current property, unless such occupancy is not permitted by zoning or land use ordinance or law.',
        },
        {
          left_line: 212,
          left_text:
            'c. Coverage B does not apply to "personal injury" or "advertising injury" arising out of an offense committed before you acquired or formed the organization.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 213,
          right_text:
            '(iv) We will not pay for the increased cost of construction if the building is not repaired, reconstructed or remodeled.',
        },
        {
          left_line: 213,
          left_text:
            'No person or organization is an insured with respect to the conduct of any current or past partnership, joint venture or limited liability company that is not shown as a Named Insured in the Declarations.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 214,
          right_text:
            'The most we will pay under this additional coverage is $100,000 per occurrence, unless a different Limit Of Insurance is shown in the Declarations.',
        },
        {
          left_line: 214,
          left_text: 'SECTION III - LIMITS OF INSURANCE',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 215,
          right_text: 'Coinsurance does not apply to this coverage.',
        },
        {
          left_line: 215,
          left_text:
            '1. The Limits of Insurance shown in the Declarations and the rules below fix the most we will pay regardless of the number of:',
          right_line: 572,
          right_text: 'We will pay:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 216,
          right_text: '(2) Application Of Coverage(s)',
        },
        {
          left_line: 216,
          left_text: 'a. Insureds;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 217,
          right_text:
            'The Coverage(s) provided in Paragraph A.3.e. apply only if both Paragraph A.3.e.(2)(a) and Paragraph A.3.e.(2)(b) are satisfied and are then subject to the qualifications set forth in Paragraph A.3.e.(2)(c).',
        },
        {
          left_line: 217,
          left_text: 'b. Claims made or "suits" brought; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 218,
          right_text: '(a) Ordinance Or Law',
        },
        {
          left_line: 218,
          left_text:
            'c. Persons or organizations making claims or bringing "suits".',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 219,
          right_text:
            '(i) Regulates the demolition, construction or repair of buildings, or establishes zoning or land use requirements at the "covered location"; and',
        },
        {
          left_line: 219,
          left_text:
            '2. The General Aggregate Limit is the most we will pay for the sum of:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 220,
          right_text: '(ii) Is in force at the time of loss.',
        },
        {
          left_line: 220,
          left_text: 'a. Medical expenses under Coverage C;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 221,
          right_text:
            'But the Coverage under Paragraph A.3.e. applies only in response to the minimum requirements of the ordinance or law. Losses and costs incurred in complying with recommended actions or standards that exceed actual requirements are not covered under this policy.',
        },
        {
          left_line: 221,
          left_text:
            'b. Damages under Coverage A, except damages because of "bodily injury" or "property damage" included in the "products-completed operations hazard"; and',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 222,
          right_text: '(b) Ordinance Or Law - Direct Physical Damage',
        },
        {
          left_line: 222,
          left_text: 'c. Damages under Coverage B.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 223,
          right_text:
            '(i) The building sustains direct physical damage that is covered under this policy and such damage results in enforcement of the ordinance or law; or',
        },
        {
          left_line: 223,
          left_text:
            '3. The Products-Completed Operations Aggregate Limit is the most we will pay under Coverage A for damages because of "bodily injury" and "property damage" included in the "products-completed operations hazard".',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 224,
          right_text:
            '(ii) The building sustains both direct physical damage that is covered under this policy and direct physical damage that is not covered under this policy, and the building damage in its entirety results in enforcement of the ordinance or law.',
        },
        {
          left_line: 224,
          left_text:
            '4. Subject to 2. above, the Personal and Advertising Injury Limit is the most we will pay under Coverage B for the sum of all damages because of all "personal injury" and all "advertising injury" sustained by any one person or organization.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 225,
          right_text:
            '(iii) But if the building sustains direct physical damage that is not covered, and such damage is the only subject of the ordinance or law, then there is no coverage under this policy even if the building has also sustained covered direct physical damage.',
        },
        {
          left_line: 225,
          left_text:
            '5. Subject to 2. or 3. above, whichever applies, the Each Occurrence Limit is the most we will pay for the sum of:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 226,
          right_text:
            '(c) In the situation described in Paragraph A.3.e.(2)(b)(ii) above, we will not pay the full amount of loss otherwise payable under the terms of Coverages A, B, and/or C of the Additional Coverage - Ordinance Or Law. Instead, we will pay a proportion of such loss; meaning the proportion that the covered direct physical damage bears to the total direct physical damage.',
        },
        {
          left_line: 226,
          left_text: 'a. Damages under Coverage A; and',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 227,
          right_text:
            '(Paragraph A.3.e.(7) provides an example of this procedure.)',
        },
        {
          left_line: 227,
          left_text: 'b. Medical expenses under Coverage C',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 228,
          right_text:
            'However, if the covered direct physical damage, alone, would have resulted in enforcement of the ordinance or law, then we will pay the full amount of loss otherwise payable under the terms of Coverages A, B, and/or C of the Additional Coverage - Ordinance Or Law.',
        },
        {
          left_line: 228,
          left_text:
            'because of all "bodily injury" and "property damage" arising out of any one "occurrence".',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 229,
          right_text:
            '(3) We will not pay under Paragraph A.3.e. Ordinance Or Law for:',
        },
        {
          left_line: 229,
          left_text:
            '6. Subject to 5. above, the Fire Damage Limit is the most we will pay under Coverage A for damages because of "property damage" to premises, while rented to you or temporarily occupied by you with permission of the owner, arising out of any one fire.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 230,
          right_text:
            '(a) The enforcement of any ordinance or law which requires demolition, repair, replacement, reconstruction, remodeling or remediation of property due to contamination by "pollutants" or due to the presence, growth, proliferation, spread or any activity of "fungi", wet or dry rot; or',
        },
        {
          left_line: 230,
          left_text:
            '7. Subject to 5. above, the Medical Expense Limit is the most we will pay under Coverage C for all medical expenses because of "bodily injury" sustained by any one person.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: 231,
          left_text:
            'The Limits of Insurance of this Coverage Part apply separately to each consecutive annual period and to any remaining period of less than 12 months, starting with the beginning of the policy period shown in the Declarations, unless the policy period is extended after issuance for an additional period of less than 12 months. In that case, the additional period will be deemed part of the last preceding period for purposes of determining the Limits of Insurance.',
          right_line: 960,
          right_text: 'F. Limits Of Insurance',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 232,
          right_text:
            '(4) Refer to Paragraph H.4.b. for the Ordinance Or Law Loss Payment Provisions.',
        },
        {
          left_line: 232,
          left_text: 'SECTION IV - COMMERCIAL GENERAL',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 233,
          right_text:
            '(5) The terms of the Ordinance Or Law Coverage apply separately to each building to which this coverage form applies.',
        },
        {
          left_line: 233,
          left_text: 'LIABILITY CONDITIONS',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 234,
          right_text:
            '(6) Under this policy we will not pay for loss due to any ordinance or law that:',
        },
        {
          left_line: 234,
          left_text: '1. Bankruptcy',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 235,
          right_text:
            '(a) You were required to comply with before the loss, even if the building was undamaged; and',
        },
        {
          left_line: 235,
          left_text:
            "Bankruptcy or insolvency of the insured or of the insured's estate will not relieve us of our obligations under this Coverage Part.",
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 236,
          right_text: '(b) You failed to comply with.',
        },
        {
          left_line: 236,
          left_text:
            '2. Duties In The Event Of Occurrence, Offense, Claim Or Suit',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 237,
          right_text:
            '(7) Example of Proportionate Loss Payment, involving both covered and non-covered losses, for Ordinance Or Law Coverage Losses (procedure as set forth in Paragraph A.3.e.(2)(c) of this coverage form).',
        },
        {
          left_line: 237,
          left_text:
            'a. You must see to it that we are notified as soon as practicable of an "occurrence" or an offense which may result in a claim. To the extent possible, notice should include:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 238,
          right_text: 'Assume:',
        },
        {
          left_line: 238,
          left_text:
            '(1) How, when and where the "occurrence" or offense took place;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 239,
          right_text:
            'Wind is a Covered Cause of Loss; Flood is an excluded Cause of Loss',
        },
        {
          left_line: 239,
          left_text:
            '(2) The names and addresses of any injured persons and witnesses; and',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 240,
          right_text: 'The building has a value of $2,000,000',
        },
        {
          left_line: 240,
          left_text:
            '(3) The nature and location of any injury or damage arising out of the "occurrence" or offense.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 241,
          right_text: 'Total direct physical damage to building: $1,000,000',
        },
        {
          left_line: 241,
          left_text:
            'b. If a claim is made or "suit" is brought against any insured, you must:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 242,
          right_text:
            "The ordinance or law in this jurisdiction is enforced when building damage equals or exceeds 50% of the building's value",
        },
        {
          left_line: 242,
          left_text:
            '(1) Immediately record the specifics of the claim or "suit" and the date received; and',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 243,
          right_text:
            'Portion of direct physical damage that is covered (caused by wind): $300,000',
        },
        {
          left_line: 243,
          left_text: '(2) Notify us as soon as practicable.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 244,
          right_text:
            'Portion of direct physical damage that is not covered (caused by flood): $700,000',
        },
        {
          left_line: 244,
          left_text:
            'You must see to it that we receive written notice of the claim or "suit" as soon as practicable.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 245,
          right_text:
            'Loss under Ordinance Or Law Coverage C of this endorsement: $250,000',
        },
        {
          left_line: 245,
          left_text: 'c. You and any other involved insured must:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 246,
          right_text:
            'Step 1. Determine the proportion that the covered direct physical damage bears to the total direct physical damage.',
        },
        {
          left_line: 246,
          left_text:
            '(1) Immediately send us copies of any demands, notices, summonses or legal papers received in connection with the claim or "suit";',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 247,
          right_text: '$300,000 $1,000,000 = .30',
        },
        {
          left_line: 247,
          left_text:
            '(2) Authorize us to obtain records and other information;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 248,
          right_text:
            'Step 2. Apply that proportion to the Ordinance Or Law loss.',
        },
        {
          left_line: 248,
          left_text:
            '(3) Cooperate with us in the investigation or settlement of the claim or defense against the "suit"; and',
          right_line: 1022,
          right_text:
            '(8) Cooperate with us in the investigation or settlement of the claim.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 249,
          right_text: '$250,000 x .30 = $75,000',
        },
        {
          left_line: 249,
          left_text:
            '(4) Assist us, upon our request, in the enforcement of any right against any person or organization which may be liable to the insured because of injury or damage to which this insurance may also apply.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 250,
          right_text:
            'In this example, the most we will pay under this policy for the Coverage C loss is $75,000 subject to the applicable Limit of Insurance and any other applicable provisions.',
        },
        {
          left_line: 250,
          left_text:
            "d. No insured will, except at that insured's own cost, voluntarily make a payment, assume any obligation, or incur any expense, other than for first aid, without our consent.",
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 251,
          right_text: 'Note:',
        },
        {
          left_line: 251,
          left_text: '3. Legal Action Against Us',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 252,
          right_text:
            'The same procedure applies to losses under Coverages A and B of the Ordinance Or Law Coverages of this policy.',
        },
        {
          left_line: 252,
          left_text:
            'No person or organization has a right under this Coverage Part:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 253,
          right_text: 'f. Personal Effects',
        },
        {
          left_line: 253,
          left_text:
            'a. To join us as a party or otherwise bring us into a "suit" asking for damages from an insured; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: 254,
          left_text:
            'b. To sue us on this Coverage Part unless all of its terms have been fully complied with.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 255,
          right_text: '(1) Loss or damage by theft; or',
        },
        {
          left_line: 255,
          left_text:
            "A person or organization may sue us to recover on an agreed settlement or on a final judgment against an insured obtained after an actual trial; but we will not be liable for damages that are not payable under the terms of this Coverage Part or that are in excess of the applicable limit of insurance. An agreed settlement means a settlement and release of liability signed by us, the insured and the claimant or the claimant's legal representative.",
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 256,
          right_text: '(2) Property covered under Household Personal Property.',
        },
        {
          left_line: 256,
          left_text: '4. Other Insurance',
          right_line: 1139,
          right_text:
            '(ii) Any Extra Expense that is paid for by other insurance that is written subject to the same plan, terms, conditions and provisions as this insurance; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 257,
          right_text:
            'The most we will pay for loss or damage under this additional coverage is $10,000 per occurrence, unless a different Limit Of Insurance is shown in the Declarations.',
        },
        {
          left_line: 257,
          left_text:
            'If other valid and collectible insurance is available to the insured for a loss we cover under Coverages A or B of this Coverage Part, our obligations are limited as follows:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 258,
          right_text: 'g. Reward Payment',
        },
        {
          left_line: 258,
          left_text: 'a. Primary Insurance',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 259,
          right_text: '(1) We will reimburse you for rewards paid as follows:',
        },
        {
          left_line: 259,
          left_text:
            'This insurance is primary except when b. below applies. If this insurance is primary, our obligations are not affected unless any of the other insurance is also primary. Then, we will share with all that other insurance by the method described in c. below.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 260,
          right_text:
            '(a) Up to $10,000 per occurrence, unless a different Limit Of Insurance is shown in the Declarations, to an eligible person for information leading to the arrest and conviction of any person or persons committing a crime resulting in loss to Covered Property from a Covered Cause of Loss. However, we will pay no more than the lesser of the following amounts:',
        },
        {
          left_line: 260,
          left_text: 'b. Excess Insurance',
          right_line: 1172,
          right_text: '2. Coinsurance',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 261,
          right_text:
            '(i) Replacement Cost of the Covered Property at the time of loss or damage, but not more than the amount required to repair or replace it; or',
        },
        {
          left_line: 261,
          left_text:
            'This insurance is excess over any of the other insurance, whether primary, excess, contingent or on any other basis:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 262,
          right_text:
            '(ii) The amount determined by the loss settlement procedure applicable to the Covered Property.',
        },
        {
          left_line: 262,
          left_text:
            '(1) That is Fire, Extended Coverage, Builder\'s Risk, Installation Risk or similar coverage for "your work";',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 263,
          right_text:
            '(b) Up to $10,000, unless a different Limit Of Insurance is shown in the Declarations, to an eligible person for the return of stolen Covered Property, when the loss is caused by theft. However, we will pay no more than the lesser of the following amounts:',
        },
        {
          left_line: 263,
          left_text:
            '(2) That is Fire insurance for premises rented to you or temporarily occupied by you with permission of the owner; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 264,
          right_text:
            '(i) Replacement Cost based on the condition of the Covered Property at the time it is returned, but not more than the amount required to repair or replace it; or',
        },
        {
          left_line: 264,
          left_text:
            '(3) If the loss arises out of the maintenance or use of aircraft, "autos" or watercraft to the extent not subject to Exclusion g. of Coverage A (Section I).',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 265,
          right_text:
            '(ii) The amount determined by the loss settlement procedure applicable to the Covered Property returned.',
        },
        {
          left_line: 265,
          left_text:
            'When this insurance is excess, we will have no duty under Coverages A or B to defend the insured against any "suit" if any other insurer has a duty to defend the insured against that "suit". If no other insurer defends, we will undertake to do so, but we will be entitled to the insured\'s rights against all those other insurers.',
          right_line: 1200,
          right_text: 'When:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 266,
          right_text:
            '(2) This additional coverage applies subject to the following conditions:',
        },
        {
          left_line: 266,
          left_text:
            'When this insurance is excess over other insurance, we will pay only our share of the amount of the loss, if any, that exceeds the sum of:',
          right_line: 1218,
          right_text: 'When:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 267,
          right_text:
            '(a) An eligible person means that person designated by a law enforcement agency as being the first to voluntarily provide the necessary information or return the stolen Covered Property, and who is not:',
        },
        {
          left_line: 267,
          left_text:
            '(1) The total amount that all such other insurance would pay for the loss in the absence of this insurance; and',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 268,
          right_text:
            '(i) You or, if you are an individual, any "family member";',
        },
        {
          left_line: 268,
          left_text:
            '(2) The total of all deductible and self-insured amounts under all that other insurance.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 269,
          right_text:
            '(ii) Your "employee" or any of his or her family members;',
        },
        {
          left_line: 269,
          left_text:
            'We will share the remaining loss, if any, with any other insurance that is not described in this Excess Insurance provision and was not bought specifically to apply in excess of the Limits of Insurance shown in the Declarations of this Coverage Part.',
          right_line: 1223,
          right_text: 'The Limit of Insurance is',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 270,
          right_text: '(iii) An employee of a law enforcement agency;',
        },
        {
          left_line: 270,
          left_text: 'c. Method of Sharing',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 271,
          right_text:
            '(iv) An employee of a business engaged in property protection;',
        },
        {
          left_line: 271,
          left_text:
            'If all of the other insurance permits contribution by equal shares, we will follow this method also. Under this approach each insurer contributes equal amounts until it has paid its applicable limit of insurance or none of the loss remains, whichever comes first.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 272,
          right_text:
            '(v) Any person who had custody of the Covered Property at the time the theft was committed; or',
        },
        {
          left_line: 272,
          left_text:
            "If any of the other insurance does not permit contribution by equal shares, we will contribute by limits. Under this method, each insurer's share is based on the ratio of its applicable limit of insurance to the total applicable limits of insurance of all insurers.",
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 273,
          right_text: '(vi) Any person involved in the crime.',
        },
        {
          left_line: 273,
          left_text: '5. Premium Audit',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 274,
          right_text:
            '(b) There will be no reimbursement for a reward paid unless and until the person(s) committing the crime is (are) convicted or the Covered Property is returned.',
        },
        {
          left_line: 274,
          left_text:
            'a. We will compute all premiums for this Coverage Part in accordance with our rules and rates.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 275,
          right_text:
            '(c) The amount of the reward is the most we will reimburse under this additional coverage for loss in any one occurrence.',
        },
        {
          left_line: 275,
          left_text:
            'b. Premium shown in this Coverage Part as advance premium is a deposit premium only. At the close of each audit period we will compute the earned premium for that period. Audit premiums are due and payable on notice to the first Named Insured. If the sum of the advance and audit premiums paid for the policy period is greater than the earned premium, we will return the excess to the first Named Insured.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 276,
          right_text:
            '(d) The insured must have posted public notice of the reward prior to the person having been the first to voluntarily provide the necessary information or return the stolen Covered Property.',
        },
        {
          left_line: 276,
          left_text:
            'c. The first Named Insured must keep records of the information we need for premium computation, and send us copies at such times as we may request.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 277,
          right_text: 'h. Trees, Shrubs And Plants',
        },
        {
          left_line: 277,
          left_text: '6. Representations',
          right_line: 1242,
          right_text: '1. Concealment, Misrepresentation Or Fraud',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 278,
          right_text:
            'The insurance that applies to Business Personal Property and Household Personal Property is extended to apply to outdoor trees, shrubs and plants (other than "stock" of trees, shrubs or plants), including debris removal expense. Coverage is provided for the "specified causes of loss" except for the Causes of Loss of:',
        },
        {
          left_line: 278,
          left_text: 'By accepting this policy, you agree:',
          right_line: 1244,
          right_text: 'a. This policy;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 279,
          right_text: '(1) Wind; or',
        },
        {
          left_line: 279,
          left_text:
            'a. The statements in the Declarations are accurate and complete;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 280,
          right_text: '(2) Weight of snow, ice or sleet.',
        },
        {
          left_line: 280,
          left_text:
            'b. Those statements are based upon representations you made to us; and',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 281,
          right_text:
            'The most we will pay for loss or damage under this additional coverage is $25,000 per occurrence but not more than $1,000 per tree, shrub or plant. These limits apply regardless of the types or number of items lost or damaged in that occurrence.',
        },
        {
          left_line: 281,
          left_text:
            'c. We have issued this policy in reliance upon your representations.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 282,
          right_text: 'i. Electronic Data',
        },
        {
          left_line: 282,
          left_text: '7. Separation Of Insureds',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 283,
          right_text:
            '(1) Subject to the provisions of this Additional Coverage - Electronic Data, we will pay for the cost to replace or restore "electronic data" which has been destroyed or corrupted by a Covered Cause of Loss. To the extent that "electronic data" is not replaced or restored, the loss will be valued at the lesser of the value of the data or the cost of replacement of the media on which the "electronic data" was stored, with blank media of substantially identical type.',
        },
        {
          left_line: 283,
          left_text:
            'Except with respect to the Limits of Insurance, and any rights or duties specifically assigned in this Coverage Part to the first Named Insured, this insurance applies:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 284,
          right_text:
            '(2) The Covered Causes of Loss applicable to this Additional Coverage - Electronic Data are limited to the "specified causes of loss", Collapse and a virus, harmful code or similar instruction introduced into or enacted on a "computer" system (including "electronic data") or a network to which it is connected, designed to damage or destroy any part of the system or disrupt its normal operation. But there is no coverage for loss or damage caused by or resulting from manipulation of a "computer" system (including "electronic data") by any employee other than as required by that employee\'s responsibilities. Similarly there is no coverage for loss or damage related to manipulation of a computer system (including "electronic data") by an entity retained by you or for you to inspect, design, install, maintain, repair, or replace that system other than as required by that entity\'s responsibilities.',
        },
        {
          left_line: 284,
          left_text:
            'a. As if each Named Insured were the only Named Insured; and',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 285,
          right_text:
            '(3) The most we will pay under this Additional Coverage - Electronic Data is $100,000 for all loss or damage sustained in any one policy year, regardless of the number of occurrences of loss or damage or the number of "covered locations" or computer systems involved. If loss payment on the first occurrence does not exhaust this amount, then the balance is available for subsequent loss or damage sustained in but not after that policy year. With respect to an occurrence which begins in one policy year and continues or results in additional loss or damage in a subsequent policy year(s), all loss or damage is deemed to be sustained in the policy year in which the occurrence began.',
        },
        {
          left_line: 285,
          left_text:
            'b. Separately to each insured against whom claim is made or "suit" is brought.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 286,
          right_text: 'j. Household Personal Property Off Covered Location',
        },
        {
          left_line: 286,
          left_text: '8. Transfer Of Rights Of Recovery Against Others To Us',
          right_line: 1276,
          right_text: '9. Transfer Of Rights Of Recovery Against Others To Us',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 287,
          right_text:
            '(1) The Coverage Territory, and the insurance, for Household Personal Property temporarily located 1,000 feet or more away from your "covered location" is extended to apply to anywhere in the world you do not own or lease. However, this coverage extension does not apply to:',
        },
        {
          left_line: 287,
          left_text:
            'If the insured has rights to recover all or part of any payment we have made under this Coverage Part, those rights are transferred to us. The insured must do nothing after loss to impair them. At our request, the insured will bring "suit" or transfer those rights to us and help us enforce them.',
          right_line: 1302,
          right_text: 'EXAMPLE:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 288,
          right_text: '(a) Property in transit; or',
        },
        {
          left_line: 288,
          left_text: '9. When We Do Not Renew',
          right_line: 1303,
          right_text: 'When:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 289,
          right_text:
            '(b) Property located in any country or jurisdiction which is subject to trade or other economic sanction or embargo by the United States of America.',
        },
        {
          left_line: 289,
          left_text:
            'If we decide not to renew this Coverage Part, we will mail or deliver to the first Named Insured shown in the Declarations written notice of the nonrenewal not less than 30 days before the expiration date.',
          right_line: 1311,
          right_text: 'Days',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 290,
          right_text:
            'This additional coverage applies only to the extent permitted by the country or jurisdiction in which the property is located.',
        },
        {
          left_line: 290,
          left_text:
            'If notice is mailed, proof of mailing will be sufficient proof of notice.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 291,
          right_text:
            '(2) If you are an individual, your Household Personal Property or the Household Personal Property of any "family member" located at any insured\'s residence away from a "covered location" is subject to a special Limit of Insurance equal to:',
        },
        {
          left_line: 291,
          left_text: 'SECTION V - DEFINITIONS',
          right_line: 1364,
          right_text: 'L. Definitions',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 292,
          right_text:
            '(a) 10% of the Household Personal Property Limit Of Insurance shown in the Declarations; or',
        },
        {
          left_line: 292,
          left_text:
            '1. "Advertising injury" means injury arising out of one or more of the following offenses:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 293,
          right_text: '(b) $5,000;',
        },
        {
          left_line: 293,
          left_text:
            "a. Oral or written publication of material that slanders or libels a person or organization or disparages a person's or organization's goods, products or services;",
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 294,
          right_text:
            'whichever is greater. Payment will be in U.S. currency, at the prevailing exchange rate at the time of loss or damage per each occurrence, except if specifically provided otherwise in the Declarations.',
        },
        {
          left_line: 294,
          left_text:
            "b. Oral or written publication of material that violates a person's right of privacy;",
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 295,
          right_text:
            'However, the special Limit of Insurance in this provision does not apply to Household Personal Property moved from a "covered location" because the "dwelling" where you reside is being repaired, renovated or rebuilt and is not fit to live in or store property in.',
        },
        {
          left_line: 295,
          left_text:
            'c. Misappropriation of advertising ideas or style of doing business; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 296,
          right_text:
            'This special Limit of Insurance does not apply to property within the United States of America (including its territories and possessions), Puerto Rico and Canada.',
        },
        {
          left_line: 296,
          left_text: 'd. Infringement of copyright, title or slogan.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 297,
          right_text:
            '(3) Any disputes between you and us as to whether there is coverage under this additional coverage must be filed in the courts of the United States of America (including its territories or possessions), Puerto Rico or Canada.',
        },
        {
          left_line: 297,
          left_text:
            '2. "Auto" means a land motor vehicle, trailer or semitrailer designed for travel on public roads, including any attached machinery or equipment. But "auto" does not include "mobile equipment".',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 298,
          right_text: 'k. Household Personal Property Refrigerated Products',
        },
        {
          left_line: 298,
          left_text:
            '3. "Bodily injury" means bodily injury, sickness or disease sustained by a person, including death resulting from any of these at any time.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 299,
          right_text:
            'If you are an individual, we will pay up to $1,000 for loss of or damage to Household Personal Property in a freezer or refrigerated unit, in the "dwelling" where you reside or a structure appurtenant to it, caused by a change in temperature due to:',
        },
        {
          left_line: 299,
          left_text: '4. "Coverage territory" means:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 300,
          right_text:
            '(1) Interruption of electrical service to the refrigeration equipment, caused by damage to generating or transmission equipment; or',
        },
        {
          left_line: 300,
          left_text:
            'a. The United States of America (including its territories and possessions), Puerto Rico and Canada;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 301,
          right_text:
            '(2) Mechanical or electrical breakdown of the refrigeration equipment.',
        },
        {
          left_line: 301,
          left_text:
            'b. International waters or airspace, provided the injury or damage does not occur in the course of travel or transportation to or from any place not included in a. above; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 302,
          right_text:
            'Under this additional coverage, we will not pay for loss of or damage to Household Personal Property not owned by you.',
        },
        {
          left_line: 302,
          left_text: 'c. All parts of the world if:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 303,
          right_text:
            'This additional coverage will not apply unless prior to the loss or damage you maintain the refrigeration equipment in proper working order.',
        },
        {
          left_line: 303,
          left_text: '(1) The injury or damage arises out of:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 304,
          right_text: 'No deductible applies to this additional coverage.',
        },
        {
          left_line: 304,
          left_text:
            '(a) Goods or products made or sold by you in the territory described in a. above; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 305,
          right_text: 'l. Water Damage',
        },
        {
          left_line: 305,
          left_text:
            '(b) The activities of a person whose home is in the territory described in a. above, but is away for a short time on your business; and',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 306,
          right_text:
            'In the event of water (or steam) damage not otherwise excluded, from a plumbing, heating, air conditioning, ventilation or automatic fire protective sprinkler system or household appliance, we will:',
        },
        {
          left_line: 306,
          left_text:
            '(2) The insured\'s responsibility to pay damages is determined in a "suit" on the merits, in the territory described in a. above or in a settlement we agree to.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 307,
          right_text:
            '(1) Also pay the necessary cost of tearing out and replacing any part of a building or structure at a "covered location" so that the damaged system or appliance can be repaired, but;',
        },
        {
          left_line: 307,
          left_text:
            '5. "Employee" includes a "leased worker". "Employee" does not include a "temporary worker".',
          right_line: 1402,
          right_text: '9. "Employee"',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 308,
          right_text:
            '(2) Not pay the cost to repair any defect which caused water or steam to escape from a system or appliance containing water or steam.',
        },
        {
          left_line: 308,
          left_text:
            '6. "Executive officer" means a person holding any of the officer positions created by your charter, constitution, by-laws or any other similar governing document.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 309,
          right_text:
            'However, this additional coverage does not apply to a sump, sump pump or related equipment.',
        },
        {
          left_line: 309,
          left_text:
            '7. "Impaired property" means tangible property, other than "your product" or "your work", that cannot be used or is less useful because:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 310,
          right_text: 'm. Grave Markers',
        },
        {
          left_line: 310,
          left_text:
            'a. It incorporates "your product" or "your work" that is known or thought to be defective, deficient, inadequate or dangerous; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 311,
          right_text:
            'The insurance that applies to Household Personal Property is extended to apply to grave markers, including mausoleums on or away from "covered locations". Coverage is provided for the "specified causes of loss".',
        },
        {
          left_line: 311,
          left_text:
            'b. You have failed to fulfill the terms of a contract or agreement;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 312,
          right_text:
            'The most we will pay for loss or damage under this additional coverage is $25,000 per occurrence but not more than $5,000 per grave marker or mausoleum. These limits apply regardless of the number of items lost or damaged in that occurrence.',
        },
        {
          left_line: 312,
          left_text: 'if such property can be restored to use by:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 313,
          right_text: 'n. Limited Coverage For "Fungi", Wet Rot And Dry Rot',
        },
        {
          left_line: 313,
          left_text:
            'a. The repair, replacement, adjustment or removal of "your product" or "your work"; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 314,
          right_text:
            '(1) The Coverage provided in Paragraphs A.3.n.(2) and A.3.n.(6) only applies when "fungi" or wet or dry rot is the result of one or more of the following causes that occur during the policy period and only if all reasonable means were used to save and preserve the property from further damage at the time of and after the occurrence:',
        },
        {
          left_line: 314,
          left_text:
            'b. Your fulfilling the terms of the contract or agreement.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 315,
          right_text:
            '(a) A "specified cause of loss" other than fire or lightning; or',
        },
        {
          left_line: 315,
          left_text: '8. "Insured contract" means:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 316,
          right_text:
            '(b) Flood, if the Flood Coverage Endorsement applies to the affected premises.',
        },
        {
          left_line: 316,
          left_text:
            'a. A contract for a lease of premises. However, that portion of the contract for a lease of premises that indemnifies any person or organization for damage by fire to premises while rented to you or temporarily occupied by you with permission of the owner is not an "insured contract";',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 317,
          right_text:
            '(2) We will pay for loss or damage to Covered Property by "fungi" or wet or dry rot. As used in this Limited Coverage, the term loss or damage means:',
        },
        {
          left_line: 317,
          left_text: 'b. A sidetrack agreement;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 318,
          right_text:
            '(a) Direct physical loss or damage to Covered Property caused by "fungi" or wet or dry rot, including the cost of removal of the "fungi" or wet or dry rot;',
        },
        {
          left_line: 318,
          left_text:
            'c. Any easement or license agreement, except in connection with construction or demolition operations on or within 50 feet of a railroad;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 319,
          right_text:
            '(b) The cost to tear out and replace any part of the building or other property as needed to gain access to the "fungi" or wet or dry rot; and',
        },
        {
          left_line: 319,
          left_text:
            'd. An obligation, as required by ordinance, to indemnify a municipality, except in connection with work for a municipality;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 320,
          right_text:
            '(c) The cost of testing performed after removal, repair, replacement or restoration of the damaged property is completed, provided there is a reason to believe that "fungi" or wet or dry rot is present.',
        },
        {
          left_line: 320,
          left_text: 'e. An elevator maintenance agreement;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 321,
          right_text:
            '(3) The most we will pay for loss or damage under this Limited Coverage is $15,000, unless a different Limit Of Insurance is shown in the Declarations. If the Declarations indicates that the Separate Scheduled Locations Option applies, then the amount of coverage is made applicable to separate locations as described in the Declarations. Regardless of the number of claims, this limit is the most we will pay for the total of all loss or damage arising out of all occurrences of "specified causes of loss" (other than fire or lightning) and flood which take place in a 12-month period (starting with the beginning of the present annual policy period). With respect to a particular occurrence of loss or damage which results in "fungi" or wet or dry rot, we will not pay more than a total of $15,000 unless a different Limit Of Insurance is shown in the Declarations even if the "fungi" or wet or dry rot continues to be present or active, or recurs, in a later policy period.',
        },
        {
          left_line: 321,
          left_text:
            'f. That part of any other contract or agreement pertaining to your business (including an indemnification of a municipality in connection with work performed for a municipality) under which you assume the tort liability of another party to pay for "bodily injury" or "property damage" to a third person or organization. Tort liability means a liability that would be imposed by law in the absence of any contract or agreement.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 322,
          right_text:
            '(4) The coverage provided under this Limited Coverage does not increase the applicable limit of insurance on any Covered Property. If a particular occurrence results in loss or damage by "fungi" or wet or dry rot, and other loss or damage, we will not pay more, for the total of all loss or damage, than the applicable limit of insurance on the affected Covered Property.',
        },
        {
          left_line: 322,
          left_text:
            'Paragraph f. does not include that part of any contract or agreement:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 323,
          right_text:
            'If there is covered loss or damage to Covered Property, not caused by "fungi" or wet or dry rot, loss payment will not be limited by the terms of this Limited Coverage, except to the extent that "fungi" or wet or dry rot causes an increase in the loss. Any such increase in the loss will be subject to the terms of this Limited Coverage.',
        },
        {
          left_line: 323,
          left_text:
            '(1) That indemnifies a railroad for "bodily injury" or "property damage" arising out of construction or demolition operations, within 50 feet of any railroad property and affecting any railroad bridge or trestle, tracks, road-beds, tunnel, underpass or crossing;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 324,
          right_text:
            '(5) The terms of this Limited Coverage do not increase or reduce the coverage provided under Paragraph C.2.g., Frozen Plumbing or under the Additional Coverage - Collapse.',
        },
        {
          left_line: 324,
          left_text:
            '(2) That indemnifies an architect, engineer or surveyor for injury or damage arising out of:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 325,
          right_text:
            '(6) The following Paragraph (6)(a) or (6)(b), applies only if Business Income And Extra Expense/Dwelling Loss Of Use Coverage applies to the "covered location" and only if the "suspension" of "operations" satisfies all terms and conditions of the applicable Business Income And Extra Expense/Dwelling Loss Of Use Coverage.',
        },
        {
          left_line: 325,
          left_text:
            '(a) Preparing, approving, or failing to prepare or approve, maps, shop drawings, opinions, reports, surveys, field orders, change orders or drawings and specifications; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: 326,
          left_text:
            '(b) Giving directions or instructions, or failing to give them, if that is the primary cause of the injury or damage; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 327,
          right_text:
            '(b) If a covered "suspension" of "operations" was caused by loss or damage other than "fungi" or wet or dry rot but remediation of "fungi" or wet or dry rot prolongs the "period of restoration", we will pay the loss and/or expense sustained during the delay (regardless of when such delay occurs during the "period of restoration"), but such coverage is limited to 90 days unless another number of days is indicated in the Declarations. The days need not be consecutive.',
        },
        {
          left_line: 327,
          left_text:
            "(3) Under which the insured, if an architect, engineer or surveyor, assumes liability for an injury or damage arising out of the insured's rendering or failure to render professional services, including those listed in (2) above and supervisory, inspection, architectural or engineering activities.",
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 328,
          right_text: 'o. Hay, Straw, Fodder Outside',
        },
        {
          left_line: 328,
          left_text:
            '9. "Leased worker" means a person leased to you by a labor leasing firm under an agreement between you and the labor leasing firm, to perform duties related to the conduct of your business. "Leased worker" does not include a "temporary worker".',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 329,
          right_text:
            'The insurance that applies to Business Personal Property is extended to apply to hay, straw and fodder in stacks, windrows or bales outside of buildings. For this property, fire or lightning, windstorm or hail, vandalism, vehicles and theft are the only Covered Causes of Loss.',
        },
        {
          left_line: 329,
          left_text:
            '10. "Loading or unloading" means the handling of property:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 330,
          right_text:
            'For the purposes of this additional coverage, a stack means hay, straw or fodder in one area separated by a clear space of 100 feet or more from any other hay, straw or fodder in the open.',
        },
        {
          left_line: 330,
          left_text:
            'a. After it is moved from the place where it is accepted for movement into or onto an aircraft, watercraft or "auto";',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 331,
          right_text:
            'The most we will pay for loss or damage under this additional coverage is $100,000 per occurrence, for any one stack, windrow or bale in the open, unless a different Limit Of Insurance is shown in the Declarations.',
        },
        {
          left_line: 331,
          left_text:
            'b. While it is in or on an aircraft, watercraft or "auto"; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 332,
          right_text:
            '4. Additional Coverages Each With A $100,000 Limit (Except As Otherwise Indicated)',
        },
        {
          left_line: 332,
          left_text:
            'c. While it is being moved from an aircraft, watercraft or "auto" to the place where it is finally delivered;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 333,
          right_text:
            'The Limit(s) of Insurance shown in Paragraph A.4., Additional Coverages Each With A $100,000 Limit (Except As Otherwise Indicated), are separate from, and will not reduce, the Limit Of Insurance shown in the Declarations or the Scheduled Location endorsement as applicable to the Covered Property.',
        },
        {
          left_line: 333,
          left_text:
            'but "loading or unloading" does not include the movement of property by means of a mechanical device, other than a hand truck, that is not attached to the aircraft, watercraft or "auto".',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 334,
          right_text: 'a. Accounts Receivable',
        },
        {
          left_line: 334,
          left_text:
            '11. "Mobile equipment" means any of the following types of land vehicles, including any attached machinery or equipment:',
          right_line: 1437,
          right_text: '20. "Mobile equipment" means:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 335,
          right_text:
            'The insurance that applies to Business Personal Property is extended to apply to covered losses and expenses that you incur as a result of loss to your records of "accounts receivable". But this extension does not apply to "accounts receivable" which exist as "electronic data". The most we will pay under this coverage extension is $100,000 per occurrence, unless a different Limit Of Insurance is shown in the Declarations.',
        },
        {
          left_line: 335,
          left_text:
            'a. Bulldozers, farm machinery, forklifts and other vehicles designed for use principally off public roads;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 336,
          right_text: '(1) Losses and expenses under this coverage are:',
        },
        {
          left_line: 336,
          left_text:
            'b. Vehicles maintained for use solely on or next to premises you own or rent;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 337,
          right_text:
            '(a) All amounts due from your customers that you are unable to collect;',
        },
        {
          left_line: 337,
          left_text: 'c. Vehicles that travel on crawler treads;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 338,
          right_text:
            '(b) Interest charges on any loan required to offset amounts you are unable to collect pending our payment of these amounts;',
        },
        {
          left_line: 338,
          left_text:
            'd. Vehicles, whether self-propelled or not, maintained primarily to provide mobility to permanently mounted:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 339,
          right_text:
            '(c) Collection expenses in excess of your normal collection expenses that are made necessary by the loss; and',
        },
        {
          left_line: 339,
          left_text:
            '(1) Power cranes, shovels, loaders, diggers or drills; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 340,
          right_text:
            '(d) Other reasonable expenses that you incur to reestablish your records of "accounts receivable".',
        },
        {
          left_line: 340,
          left_text:
            '(2) Road construction or resurfacing equipment such as graders, scrapers or rollers;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 341,
          right_text:
            '(2) If you cannot accurately establish the amount of "accounts receivable" outstanding as of the time of loss, the following method will be used to determine the loss:',
        },
        {
          left_line: 341,
          left_text:
            'e. Vehicles not described in a., b., c. or d. above that are not self-propelled and are maintained primarily to provide mobility to permanently attached equipment of the following types:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 342,
          right_text:
            '(a) Determine the total of the average monthly amounts of "accounts receivable" for the 12 months immediately preceding the month in which the loss occurred; and',
        },
        {
          left_line: 342,
          left_text:
            '(1) Air compressors, pumps and generators, including spraying, welding, building cleaning, geophysical exploration, lighting and well servicing equipment; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 343,
          right_text:
            '(b) Adjust that total for any normal fluctuations in the amount of "accounts receivable" for the month in which the loss occurred or for any demonstrated variance from the average for that month.',
        },
        {
          left_line: 343,
          left_text:
            '(2) Cherry pickers and similar devices used to raise or lower workers;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 344,
          right_text:
            '(3) The following will be deducted from the total amount of "accounts receivable", however that amount is established:',
        },
        {
          left_line: 344,
          left_text:
            'f. Vehicles not described in a., b., c. or d. above maintained primarily for purposes other than the transportation of persons or cargo.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 345,
          right_text:
            '(a) The amount of the accounts for which there is no loss;',
        },
        {
          left_line: 345,
          left_text:
            'However, self-propelled vehicles with the following types of permanently attached equipment are not "mobile equipment" but will be considered "autos":',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 346,
          right_text:
            '(b) The amount of the accounts that you are able to reestablish or collect;',
        },
        {
          left_line: 346,
          left_text: '(1) Equipment designed primarily for:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 347,
          right_text:
            '(c) An amount to allow for probable bad debts that you are normally unable to collect; and',
        },
        {
          left_line: 347,
          left_text: '(a) Snow removal;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 348,
          right_text: '(d) All unearned interest and service charges.',
        },
        {
          left_line: 348,
          left_text:
            '(b) Road maintenance, but not construction or resurfacing; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 349,
          right_text:
            '(4) You will pay us the amount of all recoveries you receive for a loss paid by us. But you will not pay us any recoveries in excess of the amount we have paid.',
        },
        {
          left_line: 349,
          left_text: '(c) Street cleaning;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 350,
          right_text: 'b. Business Personal Property Off Covered Location',
        },
        {
          left_line: 350,
          left_text:
            '(2) Cherry pickers and similar devices mounted on automobile or truck chassis and used to raise or lower workers; and',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 351,
          right_text:
            '(1) The Coverage Territory, and the insurance, is extended for Business Personal Property temporarily located 1,000 feet or more away from your "covered location", to anywhere in the world you do not own, lease or operate. However, this coverage extension does not apply to:',
        },
        {
          left_line: 351,
          left_text:
            '(3) Air compressors, pumps and generators, including spraying, welding, building cleaning, geophysical exploration, lighting and well servicing equipment.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 352,
          right_text: '(a) Property in transit; or',
        },
        {
          left_line: 352,
          left_text:
            '12. "Occurrence" means an accident, including continuous or repeated exposure to substantially the same general harmful conditions.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 353,
          right_text:
            '(b) Property located in any country or jurisdiction which is subject to trade or other economic sanction or embargo by the United States of America.',
        },
        {
          left_line: 353,
          left_text:
            '13. "Personal injury" means injury, other than "bodily injury", arising out of one or more of the following offenses:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 354,
          right_text:
            'This additional coverage applies only to the extent permitted by the country or jurisdiction in which the property is located.',
        },
        {
          left_line: 354,
          left_text: 'a. False arrest, detention or imprisonment;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 355,
          right_text:
            '(2) The most we will pay under this coverage extension is $100,000 U.S. currency, at the prevailing exchange rate at the time of loss or damage, per each occurrence, unless a different Limit Of Insurance is shown in the Declarations.',
        },
        {
          left_line: 355,
          left_text: 'b. Malicious prosecution;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 356,
          right_text:
            '(3) Any disputes between you and us as to whether there is coverage under this coverage form must be filed in the courts of the United States of America (including its territories or possessions), Puerto Rico or Canada.',
        },
        {
          left_line: 356,
          left_text:
            'c. The wrongful eviction from, wrongful entry into, or invasion of the right of private occupancy of a room, dwelling or premises that a person occupies by or on behalf of its owner, landlord or lessor;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 357,
          right_text: 'c. Fine Arts',
        },
        {
          left_line: 357,
          left_text:
            "d. Oral or written publication of material that slanders or libels a person or organization or disparages a person's or organization's goods, products or services; or",
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 358,
          right_text: 'The insurance that applies to:',
        },
        {
          left_line: 358,
          left_text:
            "e. Oral or written publication of material that violates a person's right of privacy.",
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 359,
          right_text: '(1) Business Personal Property; and',
        },
        {
          left_line: 359,
          left_text: '14. "Products-completed operations hazard":',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 360,
          right_text: '(2) Household Personal Property',
        },
        {
          left_line: 360,
          left_text:
            'a. Includes all "bodily injury" and "property damage" occurring away from premises you own or rent and arising out of "your product" or "your work" except:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 361,
          right_text:
            'is extended to apply to "fine arts". Payment will be on a "market value" basis.',
        },
        {
          left_line: 361,
          left_text:
            '(1) Products that are still in your physical possession; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 362,
          right_text:
            'The most we will pay under this additional coverage for loss or damage to Business Personal Property Fine Arts is $100,000 per occurrence, unless a different Limit Of Insurance is shown in the Declarations.',
        },
        {
          left_line: 362,
          left_text:
            '(2) Work that has not yet been completed or abandoned. However, "your work" will be deemed completed at the earliest of the following times:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 363,
          right_text:
            'The most we will pay under this additional coverage for loss or damage to Household Personal Property fine arts is $5,000 per occurrence, unless a different Limit Of Insurance is shown in the Declarations.',
        },
        {
          left_line: 363,
          left_text:
            '(a) When all of the work called for in your contract has been completed.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 364,
          right_text: 'd. Valuable Papers And Records',
        },
        {
          left_line: 364,
          left_text:
            '(b) When all of the work to be done at the job site has been completed if your contract calls for work at more than one job site.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 365,
          right_text:
            'The insurance that applies to Business Personal Property is extended to apply to loss of your "valuable papers and records" that are your property or property of others in your care, custody or control. But this extension does not apply to "valuable papers and records" which exist as "electronic data". The most we will pay under this coverage extension is $100,000 per occurrence, unless a different Limit Of Insurance is shown in the Declarations.',
        },
        {
          left_line: 365,
          left_text:
            '(c) When that part of the work done at a job site has been put to its intended use by any person or organization other than another contractor or subcontractor working on the same project.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 366,
          right_text: 'Covered Property does not include:',
        },
        {
          left_line: 366,
          left_text:
            'Work that may need service, maintenance, correction, repair or replacement, but which is otherwise complete, will be treated as completed.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 367,
          right_text:
            '(1) Property not specifically declared and described in the Declarations or Scheduled Location endorsement if such property cannot be replaced with "other property" of like kind and quality; or',
        },
        {
          left_line: 367,
          left_text:
            'b. Does not include "bodily injury" or "property damage" arising out of:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 368,
          right_text:
            '(2) Property held as samples or for delivery after sale.',
        },
        {
          left_line: 368,
          left_text:
            '(1) The transportation of property, unless the injury or damage arises out of a condition in or on a vehicle not owned or operated by you, and that condition was created by the "loading or unloading" of that vehicle by any insured;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 369,
          right_text:
            '5. Additional Coverages Each With A $50,000 Limit (Except As Otherwise Indicated)',
        },
        {
          left_line: 369,
          left_text:
            '(2) The existence of tools, uninstalled equipment or abandoned or unused materials; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 370,
          right_text:
            'The Limit(s) of Insurance shown in Paragraph A.5., Additional Coverages Each With A $50,000 Limit (Except As Otherwise Indicated), are separate from, and will not reduce the Limit Of Insurance shown in the Declarations or the Scheduled Location endorsement as applicable to the Covered Property.',
        },
        {
          left_line: 370,
          left_text:
            '(3) Products or operations for which the classification, listed in the Declarations or in a policy schedule, states that products-completed operations are subject to the General Aggregate Limit.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 371,
          right_text: 'a. Consequential Loss',
        },
        {
          left_line: 371,
          left_text: '15. "Property damage" means:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 372,
          right_text:
            'We will pay up to $50,000 per occurrence, unless a different Limit Of Insurance is shown in the Declarations, for the reduction in value of undamaged Business Personal Property parts of a product which becomes unmarketable. The reduction in value must be the direct result of physical loss or damage from a Covered Cause of Loss to another part of the product.',
        },
        {
          left_line: 372,
          left_text:
            'a. Physical injury to tangible property, including all resulting loss of use of that property. All such loss of use shall be deemed to occur at the time of the physical injury that caused it; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 373,
          right_text: 'b. Fire Extinguishing Systems Expense',
        },
        {
          left_line: 373,
          left_text:
            'b. Loss of use of tangible property that is not physically injured. All such loss of use shall be deemed to occur at the time of the "occurrence" that caused it.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: 374,
          left_text:
            '16. "Suit" means a civil proceeding in which damages because of "bodily injury", "property damage", "personal injury" or "advertising injury" to which this insurance applies are alleged. "Suit" includes:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 375,
          right_text:
            '(a) The cost of recharging your fire extinguishers and fire extinguishing systems (including hydrostatic testing if needed) or replacing the fire extinguishers or fire extinguishing systems, whichever is less, when the need to recharge or replace is caused by a Covered Cause of Loss; and',
        },
        {
          left_line: 375,
          left_text:
            'a. An arbitration proceeding in which such damages are claimed and to which the insured must submit or does submit with our consent; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 376,
          right_text:
            '(b) For loss or damage to Covered Property if such loss or damage is the result of an accidental discharge of chemicals from a fire extinguishing system.',
        },
        {
          left_line: 376,
          left_text:
            'b. Any other alternative dispute resolution proceeding in which such damages are claimed and to which the insured submits with our consent.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 377,
          right_text:
            '(2) No coverage will apply if the fire extinguishing system is discharged during installation or testing.',
        },
        {
          left_line: 377,
          left_text:
            '17. "Temporary worker" means a person who is furnished to you to substitute for a permanent "employee" on leave or to meet seasonal or short-term workload conditions.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 378,
          right_text:
            '(3) The most we will pay under this additional coverage is $50,000 in any one occurrence, unless a different Limit Of Insurance is shown in the Declarations.',
        },
        {
          left_line: 378,
          left_text: '18. "Your product" means:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 379,
          right_text: 'c. Inventory And Appraisal Expense',
        },
        {
          left_line: 379,
          left_text:
            'a. Any goods or products, other than real property, manufactured, sold, handled, distributed or disposed of by:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 380,
          right_text:
            'The insurance that applies to Business Personal Property is extended to apply to reasonable inventory and appraisal expenses incurred. This coverage applies to inventories and appraisals made at our request and not due to a disagreement.',
        },
        {
          left_line: 380,
          left_text: '(1) You;',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 381,
          right_text:
            'We will not pay for any expenses incurred, directed or billed by or payable to any public adjusters or public accountants or their associates or subordinates or any costs as provided in the Loss Condition - Appraisal.',
        },
        {
          left_line: 381,
          left_text: '(2) Others trading under your name; or',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 382,
          right_text:
            'The most we will pay under this additional coverage is $50,000 per occurrence, unless a different Limit Of Insurance is shown in the Declarations.',
        },
        {
          left_line: 382,
          left_text:
            '(3) A person or organization whose business or assets you have acquired; and',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 383,
          right_text: 'd. Pollution Cleanup And Removal',
        },
        {
          left_line: 383,
          left_text:
            'b. Containers (other than vehicles), materials, parts or equipment furnished in connection with such goods or products.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 384,
          right_text:
            'We will pay your expense to extract "pollutants" from land or water at your "covered location" if the discharge, dispersal, seepage, migration, release or escape of the "pollutants" is caused by or results from a Covered Cause of Loss that occurs during the policy period. The expenses will be paid only if they are reported to us in writing within 180 days of the date on which the Covered Cause of Loss occurs.',
        },
        {
          left_line: 384,
          left_text: '"Your product" includes:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 385,
          right_text:
            'This additional coverage does not apply to costs to test for, monitor or assess the existence, concentration or effects of "pollutants". But we will pay for testing which is performed in the course of extracting the "pollutants" from the land or water at your "covered location".',
        },
        {
          left_line: 385,
          left_text:
            'a. Warranties or representations made at any time with respect to the fitness, quality, durability, performance or use of "your product"; and',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 386,
          right_text:
            'This additional coverage does not apply to the extent that coverage is provided under the Bulk Liquid Tank Storage Additional Coverage.',
        },
        {
          left_line: 386,
          left_text:
            'b. The providing of or failure to provide warnings or instructions.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 387,
          right_text:
            'The most we will pay under this additional coverage for each of your "covered locations" is $50,000, unless a different Limit Of Insurance is shown in the Declarations, for the sum of all covered expense arising out of Covered Causes of Loss occurring during each separate 12-month period of this policy.',
        },
        {
          left_line: 387,
          left_text:
            '"Your product" does not include vending machines or other property rented to or located for the use of others but not sold.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 388,
          right_text: 'e. Property In Transit',
        },
        {
          left_line: 388,
          left_text: '19. "Your work" means:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: 389,
          left_text:
            'a. Work or operations performed by you or on your behalf; and',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 390,
          right_text:
            'The insurance that applies to Business Personal Property is extended to apply to Business Personal Property away from "covered locations". Property must be in transit between points in the Coverage Territory. We cover property shipped by any type of carrier or vehicle.',
        },
        {
          left_line: 390,
          left_text:
            'b. Materials, parts or equipment furnished in connection with such work or operations.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 391,
          right_text:
            'The most we will pay under this additional coverage is $50,000 per occurrence regardless of the number of vehicles, conveyances, containers, or similar methods of transportation involved in the loss.',
        },
        {
          left_line: 391,
          left_text: '"Your work" includes:',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 392,
          right_text: '(2) Additional Property Not Covered',
        },
        {
          left_line: 392,
          left_text:
            'a. Warranties or representations made at any time with respect to the fitness, quality, durability, performance or use of "your work"; and',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 393,
          right_text:
            'The following items are excluded in addition to those under Paragraph A.2., Property Not Covered.',
        },
        {
          left_line: 393,
          left_text:
            'b. The providing of or failure to provide warnings or instructions.',
          right_line: null,
          right_text: '',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 394,
          right_text:
            '(a) Property in the custody of a government postal service;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 395,
          right_text:
            '(b) Property you accept while acting as a common or contract carrier;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 396,
          right_text: '(c) Import shipments until:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 397,
          right_text: '(i) Discharged from the import conveyance; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 398,
          right_text: '(ii) Ocean Marine insurance ceases;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 399,
          right_text: 'whichever occurs last;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 400,
          right_text: '(d) Export shipments:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 401,
          right_text: '(i) After placed on the outbound conveyance; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 402,
          right_text:
            '(ii) When Ocean Marine insurance applies to the shipment;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 403,
          right_text: 'whichever occurs first; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 404,
          right_text:
            '(e) Works of "fine arts" unless described in the Declarations.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 405,
          right_text: '(3) When Coverage Applies',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 406,
          right_text: 'We cover property:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 407,
          right_text:
            '(a) While in the custody of the carrier or messenger for hire:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 408,
          right_text:
            '(i) Until the property is delivered at its destination; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 409,
          right_text:
            '(ii) If the property is not delivered, until it is returned to you.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 410,
          right_text:
            'We also cover the property held temporarily in storage prior to delivery to its destination or its return to you.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 411,
          right_text:
            '(b) In or on any land vehicle you own or operate while in transit, from the time the vehicle leaves the premises where the shipment begins until the vehicle arrives at its destination.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 412,
          right_text: '(4) Coverage Extensions',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 413,
          right_text: '(a) Packing Or Consolidating Companies',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 414,
          right_text:
            'We will pay for loss of Covered Property in the custody of a packing or consolidating company employed by you or your consignee. However, this coverage extension does not apply if the packing or consolidating company is the agent or representative of you or the consignee for the purpose of this insurance.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 415,
          right_text: '(b) Free On Board (F.O.B.) Point Of Origin',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 416,
          right_text:
            'We cover your interest in Covered Property you sold F.O.B. Point Of Origin.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 417,
          right_text:
            'Payments under these coverage extensions will not increase the Limit of Insurance.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 419,
          right_text:
            'We will not pay for loss or damage caused by or resulting from any of the following:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 420,
          right_text: '(a) Improper packing or stowage, or rough handling.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 421,
          right_text:
            '(b) Breakdown of refrigeration equipment. But this exclusion does not apply to equipment of others who are carriers for hire.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 422,
          right_text: '(6) Additional Conditions',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 423,
          right_text:
            '(a) For Property In Transit, Loss Condition H.7., Valuation is replaced by the following:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 424,
          right_text:
            'The value of Covered Property will be determined as follows:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 425,
          right_text:
            '(i) The value agreed on between the shipper and the consignee in writing prior to loss or damage.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 426,
          right_text: '(ii) If Paragraph (i) does not apply the value will be:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 427,
          right_text:
            'i. The actual net invoice price of Covered Property shipped to your customers; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 428,
          right_text:
            'ii. The actual net invoice cost of Covered Property you bought from others.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 429,
          right_text:
            '(iii) For Covered Property for which Paragraphs (i) and (ii) do not apply, the value will be the least of the following amounts:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 430,
          right_text: 'i. The actual net cost;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 431,
          right_text:
            'ii. The cost of restoring that property to its condition immediately before loss; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 432,
          right_text: 'iii. The replacement cost.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 433,
          right_text:
            'The value will include your prepaid freight charges and any other shipping charges that are due since the start of transit.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 434,
          right_text:
            '(b) For Property In Transit, the following conditions apply in addition to the Agricultural Capital Assets (Output Policy) Coverage Form Conditions and the Common Policy Conditions.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 436,
          right_text:
            'i. We cover property located within the United States of America, its territories and possessions, Puerto Rico and Canada.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 437,
          right_text:
            'ii. We also cover property being shipped by air within and between points in Paragraph i.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 438,
          right_text: '(ii) Released Bills Of Lading',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 439,
          right_text:
            'You may accept receipts and/or bills of lading issued by carriers limiting the amount of their liability.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 440,
          right_text: 'f. Installment Sales Property',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 442,
          right_text:
            'The insurance that applies to Business Personal Property is extended to apply to:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 443,
          right_text:
            '(a) Property that has been sold by you under installment sales contracts or similar type agreements, such as deferred or delayed payment or conditional sales agreements; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 444,
          right_text: '(b) "Leased property".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 445,
          right_text: '(2) Single Or Dual Interest',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 446,
          right_text:
            '(a) This additional coverage applies on a single interest basis, except as provided in Paragraph (b). Single interest means that this insurance covers only your interest; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 447,
          right_text:
            '(b) Dual Interest, which applies to installment sales coverage, if indicated in the Declarations, means that this insurance covers both your interest and the interests of purchasers of the Covered Property.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 448,
          right_text:
            'The most we will pay for this coverage is $50,000 per occurrence, unless a different Limit Of Insurance is shown in the Declarations.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 449,
          right_text: '(3) When Coverage Applies',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 451,
          right_text:
            '(a) For installment sales until the Covered Property is fully paid for by the purchaser; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 452,
          right_text:
            '(b) For "leased property" until the end of the period for which the Covered Property is leased, rented or sent out on approval;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 453,
          right_text:
            'but in no event will coverage apply after the end of the policy period.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 454,
          right_text: '(4) Property Not Covered',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 455,
          right_text:
            'Covered Property does not include property after your interest in it ceases.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 456,
          right_text: '(5) Additional Conditions - Valuation',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 457,
          right_text:
            'For Installment Sales Property other than "leased property", Loss Condition H.7., Valuation is replaced by the following:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 458,
          right_text:
            'The value of Covered Property will be determined by the following:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 459,
          right_text: '(a) Sold Property Not Yet Delivered',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 460,
          right_text:
            'The value of property sold but not yet delivered will be your net selling price after all allowances and discounts.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 461,
          right_text: '(b) Loss Limitation - Single Interest Installment Sales',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 462,
          right_text:
            'We will pay only that proportion of any loss or damage that the amount of your interest in the property bears to the value of the property.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 463,
          right_text: 'EXAMPLE:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 465,
          right_text: 'The value of the property is',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 466,
          right_text: '$',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 467,
          right_text: '75,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 468,
          right_text: 'Your interest in the property is',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 469,
          right_text: '$',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 470,
          right_text: '50,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 471,
          right_text: "The purchaser's interest in the",
        },
        {
          left_line: null,
          left_text: '',
          right_line: 473,
          right_text: '$',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 474,
          right_text: '25,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 475,
          right_text: 'The amount of the loss is',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 476,
          right_text: '$',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 477,
          right_text: '30,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 478,
          right_text: 'The loss payable is ($50,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 479,
          right_text: '$75,000) x $30,000 =',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 480,
          right_text: '$',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 481,
          right_text: '20,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 482,
          right_text:
            '(6) Additional Conditions - Dual Interest Installment Sales',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 483,
          right_text:
            'All provisions are binding on all parties of interest. But the protection given an insured named in the Declarations will not be impaired by the failure of another party of interest to comply with all provisions, if the insured is diligent in trying to obtain compliance with all provisions.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 484,
          right_text: 'g. Bulk Liquid Tank Storage',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 486,
          right_text:
            'With respect to bulk liquid stored in aboveground "tanks" covered under this policy, unintended leakage of the liquid from the "tank", that does not result from another covered cause of loss, is an additional Covered Cause of Loss.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 487,
          right_text:
            'The most we will pay under this additional coverage is $50,000 per occurrence with a $100,000 annual aggregate Limit of Insurance unless different Limits of Insurance are shown in the Declarations.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 488,
          right_text:
            'This additional coverage does not apply to costs to test for, monitor or assess the existence, concentration or effects of "pollutants". But we will pay for testing which is performed in the course of extracting the "pollutants" from the land or water at your "covered location".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 489,
          right_text: '(2) Additional Conditions - Valuation',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 490,
          right_text: '(a) The value of:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 491,
          right_text: '(i) Bulk liquid you own or lease; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 492,
          right_text:
            '(ii) Bulk liquid of others in your care, custody or control;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 493,
          right_text: 'will be the replacement cost of the liquid.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 494,
          right_text:
            '(b) The value of sold but not yet delivered bulk liquid will be your net selling price after all allowances and discounts.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 495,
          right_text:
            'Paragraph H.7. of the Valuation Loss Condition does not apply to this Bulk Liquid Tank Storage Additional Coverage.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 496,
          right_text: '6. Additional Crime Coverages',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 497,
          right_text:
            'The Limit(s) of Insurance shown in Paragraph A.6., Additional Crime Coverages, are separate from, and will not reduce, the Limit Of Insurance shown in the Declarations or the Scheduled Location endorsement as applicable to the Covered Property.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 498,
          right_text: 'a. Employee Theft',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 499,
          right_text:
            '(1) We will pay for loss of or damage to "money", "securities" and "other property" resulting directly from "theft" committed by an "employee", whether identified or not, acting alone or in collusion with other persons. The most we will pay under this additional coverage is $25,000 per "occurrence", unless a different Limit Of Insurance is shown in the Declarations.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 500,
          right_text:
            '(2) We will pay for loss you sustain through such acts committed at any time and discovered by you:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 501,
          right_text:
            '(a) During the policy period shown in the Declarations; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 502,
          right_text:
            '(b) During the period of time provided in Paragraph A.6.a.(3).',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 503,
          right_text:
            'Discovery of loss occurs when you first become aware of facts which would cause a reasonable person to assume that a loss covered by this insurance has been or will be incurred, even though the exact amount or details of loss may not then be known.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 504,
          right_text:
            'Discovery also occurs when you receive notice of an actual or potential claim against you alleging facts that if true would constitute a covered loss under this policy.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 505,
          right_text:
            '(3) We will pay for loss that you sustained prior to the effective date of termination or cancellation of this insurance, which is discovered by you no later than 60 days from the date of that termination or cancellation.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 506,
          right_text:
            'However, this extended period to discover loss terminates immediately upon the effective date of any other insurance obtained by you replacing in whole or in part the insurance afforded by this policy, whether or not such other insurance provides coverage for loss sustained prior to its effective date.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 507,
          right_text:
            '(4) We will not pay for loss, or that part of any loss, the proof of which as to its existence or amount is dependent upon:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 508,
          right_text: '(a) Any inventory computation; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 509,
          right_text: '(b) A profit and loss computation.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 510,
          right_text:
            'However, where you establish wholly apart from such computations that you have sustained a loss, then you may offer your inventory records and actual physical count on inventory in support of the amount of the loss claimed.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 511,
          right_text:
            '(5) This coverage does not apply to loss caused by any "employee" of yours, or predecessor in interest of yours, for whom similar prior insurance has been cancelled and not reinstated since the last such cancellation.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 512,
          right_text:
            '(6) This coverage is cancelled as to any "employee" immediately upon discovery by:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 513,
          right_text: '(a) You; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 514,
          right_text:
            '(b) Any of your partners, "members", "managers", officers, directors or trustees not in collusion with the "employee";',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 515,
          right_text:
            'of "theft" or any other dishonest or criminal act committed by the "employee" whether before or after becoming employed by you.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 516,
          right_text:
            '(7) Regardless of the number of years this insurance remains in force or the number of premium payments paid, no Limit of Insurance cumulates from year to year or policy period to policy period.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 517,
          right_text: 'b. Forgery Or Alteration',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 518,
          right_text:
            'The insurance that applies to Business Personal Property is extended to apply to your loss which results directly from a written promise or order to pay "money" which is forged or altered whether the promise or order is:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 519,
          right_text: '(1) Made or drawn by or drawn upon you; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 520,
          right_text: '(2) Made or drawn by one acting as your agent.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 521,
          right_text:
            'For the purposes of this additional coverage, a substitute check as defined in the Check Clearing for the 21st Century Act will be treated the same as the original it replaced.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 522,
          right_text:
            'The most we will pay under this additional coverage is $25,000 for any one "occurrence", unless a different Limit Of Insurance is shown in the Declarations.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 523,
          right_text:
            'Loss due to forgery or alteration by you or your "employees" is not covered under this additional coverage extension.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 524,
          right_text: 'c. Money And Securities',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 525,
          right_text:
            'The insurance that applies to Business Personal Property is extended to apply to your "money" and "securities" loss which results directly from "theft", disappearance or destruction while:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 526,
          right_text: '(1) Inside covered buildings;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 527,
          right_text:
            "(2) Inside a banking or safe depository institution's buildings; or",
        },
        {
          left_line: null,
          left_text: '',
          right_line: 528,
          right_text: '(3) Outside covered buildings while in the custody of;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 529,
          right_text: '(a) A "messenger"; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 530,
          right_text: '(b) An armored motor vehicle company.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 531,
          right_text:
            'The most we will pay for any one "occurrence" for loss is $25,000 under Paragraph c.(1) and Paragraph c.(2) above and $10,000 under Paragraph c.(3) above, unless a different Limit Of Insurance is shown in the Declarations.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 532,
          right_text:
            'Loss due to your acts or acts of your "employees" is not covered under this additional coverage extension.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 533,
          right_text:
            'd. Credit Card And Electronic Fund Transfer Cards Or Other Access Devices; Forgery; Counterfeit Money',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 534,
          right_text:
            'If you are an individual, the insurance that applies to your Household Personal Property is extended to include:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 535,
          right_text:
            '(1) The legal obligation of you or any "family member" to pay because of the "theft" or unauthorized use of household credit cards issued to you or any "family member" or registered in your or any "family member\'s" name.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 536,
          right_text:
            'But this additional coverage will not apply if you or any "family member" has not complied with all terms and conditions under which the credit card was issued;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 537,
          right_text:
            '(2) Loss resulting from "theft" or unauthorized use of an electronic fund transfer card or other access device used for deposit, withdrawal or transfer of funds, issued to you or any "family member" or registered in your or any "family member\'s" name.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 538,
          right_text:
            'But this additional coverage will not apply if you or any "family member" has not complied with all terms and conditions under which the electronic fund transfer card or other access device was issued;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 539,
          right_text:
            '(3) Loss to you or any "family member" caused by forgery or alteration of any check or negotiable instrument; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 540,
          right_text:
            '(4) Loss to you or any "family member" through acceptance in good faith of counterfeit United States or Canadian paper currency.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 541,
          right_text:
            'However, we will not pay for loss arising out of business pursuits or dishonesty of you or any "family member".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 542,
          right_text:
            'The most we will pay under this additional coverage is $500, unless a different Limit Of Insurance is shown in the Declarations.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 543,
          right_text: 'No deductible applies to this additional coverage.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 544,
          right_text: 'e. Money Orders And Counterfeit Money',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 545,
          right_text:
            'The insurance that applies to your Business Personal Property is extended to apply to loss resulting directly from your having accepted in good faith, in exchange for merchandise, "money" or services:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 546,
          right_text:
            '(1) Money orders issued by any post office, express company or bank that are not paid upon presentation; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 547,
          right_text:
            '(2) "Counterfeit money" that is acquired during the regular course of business.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 548,
          right_text:
            'The most we will pay for any one loss under this additional coverage is $5,000.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 549,
          right_text: 'No deductible applies to this additional coverage.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 550,
          right_text:
            '7. Business Income And Extra Expense/Dwelling Loss Of Use',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 551,
          right_text:
            'When a Limit Of Insurance is shown in the Declarations or Scheduled Location endorsement for Business Income And Extra Expense, coverage is provided as described below for one or more of the following options for which that Limit Of Insurance is shown:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 552,
          right_text: 'Option 1 -',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 553,
          right_text:
            'Business Income And Extra Expense Including Rental Value',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 554,
          right_text: 'Option 2 -',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 555,
          right_text:
            'Business Income And Extra Expense Other Than Rental Value',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 556,
          right_text: 'Option 3 -',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 557,
          right_text: 'Rental Value And Extra Expense',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 558,
          right_text:
            'If Option 1 above is selected, the term Business Income will include "rental value". If Option 3 above is selected, the term Business Income will mean "rental value" only.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 559,
          right_text:
            'If Limits of Insurance are shown under more than one of the above options, the provisions of this coverage apply separately to each.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 560,
          right_text: 'a. Business Income',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 561,
          right_text:
            'We will pay for the actual loss of Business Income you sustain due to the necessary "suspension" of your "operations" during the "period of restoration". The "suspension" must be caused by direct physical loss of or damage to property at your "covered location" or if coverage is scheduled to your property at scheduled locations. The loss or damage must be caused by or result from a Covered Cause of Loss. With respect to loss of or damage to Business Personal Property in the open or Business Personal Property in a vehicle, the "covered location" or scheduled location includes the area within 1,000 feet of that "covered location" or scheduled location.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 562,
          right_text:
            'With respect to the requirements set forth in the preceding paragraph, if you occupy only part of the site at which the "covered location" or scheduled location is located, your "covered location" or scheduled location means:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 563,
          right_text:
            'The portion of the building which you rent, lease or occupy; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 564,
          right_text:
            'Any area within the building or on the site at which the "covered location" or scheduled location is located, if the area services, or is used to gain access to, the "covered location" or scheduled location.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 565,
          right_text:
            'Business Income Coverage does not apply if the "suspension" of your "operations" is caused by direct physical loss of or damage to growing crops, "livestock" or "poultry".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 566,
          right_text: 'Business Income means the:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 567,
          right_text:
            '(1) Net Income (Net Profit or Loss before income taxes) that would have been earned or incurred; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 568,
          right_text:
            '(2) Continuing normal operating expenses incurred, including "payroll".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 569,
          right_text:
            'For manufacturing risks, Net Income includes the net sales value of production.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 570,
          right_text: 'b. Extra Expense',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 571,
          right_text:
            'Extra Expense means the necessary expenses you incur during the "period of restoration" that you would not have incurred if there had been no direct physical loss or damage to property caused by or resulting from a Covered Cause of Loss.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 573,
          right_text:
            '(1) Any Extra Expense to avoid or minimize the "suspension" of business and to continue "operations":',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 574,
          right_text: '(a) At your "covered location"; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 575,
          right_text:
            '(b) At replacement locations or at temporary locations, including relocation expenses and costs to equip and operate the replacement or temporary locations.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 576,
          right_text:
            '(2) Any Extra Expense to minimize the "suspension" of business if you cannot continue "operations".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 577,
          right_text: '(3) Any Extra Expense to:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 578,
          right_text: '(a) Repair or replace any property; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 579,
          right_text:
            '(b) Research, replace or restore the lost information on damaged "valuable papers and records";',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 580,
          right_text:
            'to the extent it reduces the amount of loss that otherwise would have been payable under this coverage.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 581,
          right_text:
            'Extra Expense Coverage does not apply if the "suspension" of your "operations" is caused by direct physical loss of or damage to growing crops, "livestock" or "poultry".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 582,
          right_text:
            'c. Additional Limitation - Interruption Of Computer Operations',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 583,
          right_text:
            '(1) Coverage for Business Income does not apply when a "suspension" of "operations" is caused by destruction or corruption of "electronic data", or any loss or damage to "electronic data", except as provided under the Additional Coverage - Interruption Of Computer Operations.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 584,
          right_text:
            '(2) Coverage for Extra Expense does not apply when action is taken to avoid or minimize a "suspension" of "operations" caused by destruction or corruption of "electronic data", or any loss or damage to "electronic data", except as provided under the Additional Coverage - Interruption Of Computer Operations.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 585,
          right_text: 'd. Dwelling Loss Of Use',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 586,
          right_text:
            'We cover the following up to the Limit Of Insurance shown in the Declarations or Scheduled Location endorsement:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 587,
          right_text: '(1) Your Additional Living Expense',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 588,
          right_text:
            'If you are an individual and a Covered Cause of Loss renders your principal living quarters uninhabitable, we will pay any necessary increase in living expense you incur so that your household can maintain its normal standard of living, provided that such uninhabitable quarters are located in a "dwelling" covered under this policy.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 589,
          right_text:
            'Payment under Your Additional Living Expense will be for the shortest time required for repair or replacement of the damaged property, or, if you relocate, the shortest time required for your household to settle elsewhere.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 590,
          right_text: '(2) Fair Rental Value',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 591,
          right_text:
            'If a Covered Cause of Loss renders uninhabitable any portion of a covered "dwelling" or appurtenant structure that you, as the owner, rent or hold for rental to others as a residence or private garage, we will pay for the Fair Rental Value loss you sustain.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 592,
          right_text:
            'But we will exclude from our payment any expenses that do not continue while the rental portion is uninhabitable.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 593,
          right_text:
            'Payment under this Fair Rental Value Coverage will be for the shortest time required for repair or replacement of the damaged property.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 594,
          right_text:
            '(3) Loss And Expense Due To Emergency Prohibition Against Occupancy',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 595,
          right_text:
            'We will pay for the Additional Living Expense and Fair Rental Value loss you sustain if a civil authority prevents use of the "dwelling" or appurtenant structure because of direct damage to neighboring premises by a Covered Cause of Loss.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 596,
          right_text:
            'But we will not pay parts of such loss or expense that are incurred:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 597,
          right_text:
            '(a) After a period of four consecutive weeks has elapsed from the date a civil authority prevents the use of the "dwelling" or appurtenant structure; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 598,
          right_text: '(b) Due to cancellation of a lease or agreement.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 599,
          right_text:
            'The period of our liability under Dwelling Loss Of Use coverage is not limited by the expiration of this policy.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 600,
          right_text: 'No Deductible applies to Dwelling Loss Of Use coverage.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 601,
          right_text: 'e. Additional Coverages',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 602,
          right_text:
            'The Limit(s) of Insurance shown in Paragraph A.7.e., Additional Coverages are provided within not in addition to, the Limit Of Insurance stated in the Declarations or the Scheduled Location endorsement, except for Newly Acquired Locations in Paragraph A.7.e.(6).',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 603,
          right_text: '(1) Civil Authority',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 604,
          right_text:
            'In this Additional Coverage - Civil Authority, the "covered locations" are locations to which Business Income And Extra Expense/Dwelling Loss Of Use Coverage applies.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 605,
          right_text:
            'When a Covered Cause of Loss causes damage to property other than property at the "covered locations", we will pay for the actual loss of Business Income you sustain and necessary Extra Expense caused by action of civil authority that prohibits access to the "covered locations", provided that both of the following apply:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 606,
          right_text:
            '(a) Access to the area immediately surrounding the damaged property is prohibited by civil authority as a result of the damage, and the "covered locations" are within that area but are not more than one mile from the damaged property; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 607,
          right_text:
            '(b) The action of civil authority is taken in response to dangerous physical conditions resulting from the damage or continuation of the Covered Cause of Loss that caused the damage, or the action is taken to enable a civil authority to have unimpeded access to the damaged property.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 608,
          right_text:
            'Civil Authority coverage will apply for a period of up to four consecutive weeks from the date of that action.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 609,
          right_text: '(2) Alterations And New Buildings',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 610,
          right_text:
            'We will pay for the actual loss of Business Income you sustain and necessary Extra Expense you incur due to direct physical loss or damage at your "covered location" caused by or resulting from any Covered Cause of Loss to:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 611,
          right_text:
            '(a) New buildings or structures, whether complete or under construction;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 612,
          right_text:
            '(b) Alterations or additions to existing buildings or structures; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 613,
          right_text:
            '(c) Machinery, equipment, supplies or building materials located on or within 1,000 feet of your "covered location" and:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 614,
          right_text:
            '(i) Used in the construction, alterations or additions; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 615,
          right_text: '(ii) Incidental to the occupancy of new buildings.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 616,
          right_text:
            'If such direct physical loss or damage delays the start of "operations", the "period of restoration" for Business Income Coverage will begin on the date "operations" would have begun if the direct physical loss or damage had not occurred.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 617,
          right_text: '(3) Extended Business Income',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 618,
          right_text: '(a) Business Income Other Than Rental Value',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 619,
          right_text:
            'If the necessary "suspension" of your "operations" produces a Business Income loss payable under this policy, we will pay for the actual loss of Business Income you incur during the period that:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 620,
          right_text:
            '(i) Begins on the date property (except "finished stock") is actually repaired, rebuilt or replaced and "operations" are resumed; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 621,
          right_text:
            '(ii) Ends on the earlier of the date you could restore your "operations" with reasonable speed, to the level which would generate the business income amount that would have existed if no direct physical loss or damage had occurred and not to exceed 90 consecutive days or the number of consecutive days shown in the Declarations or Scheduled Location endorsement after the date determined in Paragraph (a)(i) above.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 622,
          right_text:
            'However, Extended Business Income does not apply to loss of Business Income incurred as a result of unfavorable business conditions caused by the impact of the Covered Cause of Loss in the area where your "covered locations" are located.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 623,
          right_text:
            'Loss of Business Income must be caused by direct physical loss or damage at your "covered location" caused by or resulting from any Covered Cause of Loss.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 624,
          right_text: '(b) Rental Value',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 625,
          right_text:
            'If the necessary "suspension" of your "operations" produces a "rental value" loss payable under this policy, we will pay for the actual loss of "rental value" you incur during the period that:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 626,
          right_text:
            '(i) Begins on the date property is actually repaired, rebuilt or replaced and tenantability is restored; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 627,
          right_text:
            '(ii) Ends the earlier of the date you could restore tenant occupancy with reasonable speed, to the level which would generate the "rental value" that would have existed if no direct physical loss or damage had occurred and not to exceed 90 consecutive days or the number of consecutive days shown in the Declarations or Scheduled Location endorsement after the date determined in Paragraph (b)(i) above.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 628,
          right_text:
            'However, Extended Business Income does not apply to loss of "rental value" incurred as a result of unfavorable business conditions caused by the impact of the Covered Cause of Loss in the area where your "covered locations" are located.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 629,
          right_text:
            'Loss of "rental value" must be caused by direct physical loss or damage at your "covered location" caused by or resulting from any Covered Cause of Loss.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 630,
          right_text:
            'This additional coverage does not apply to "dwellings" and their appurtenant structures.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 631,
          right_text: '(4) Contractual Penalties',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 632,
          right_text:
            'We will pay for contractual penalties imposed by written contract between you and your customers. These penalties must:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 633,
          right_text:
            '(a) Result from your failure to deliver your product on time according to contract terms;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 634,
          right_text:
            '(b) Result from direct physical loss or damage to Covered Property by a Covered Cause of Loss; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 635,
          right_text: '(c) Have been paid by you to your customer.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 636,
          right_text:
            'The most we will pay under this additional coverage is $25,000 per occurrence with a $100,000 annual aggregate limit.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 637,
          right_text:
            '(5) Business Income And Extra Expense Caused By Dependent Properties',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 638,
          right_text:
            'When Business Income and Extra Expense Coverages are provided by this policy, we will pay for the actual loss of Business Income you sustain and necessary Extra Expense you incur due to direct physical loss or damage at the premises of a "dependent property" resulting from a Covered Cause of Loss.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 639,
          right_text:
            'The most we will pay under this coverage is $100,000 per occurrence.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 640,
          right_text:
            'With respect to this coverage, extra expense means necessary expenses you incur during the "period of restoration" that you would not have incurred if there had been no direct physical loss or damage to the premises of any "dependent property" caused by or resulting from a Covered Cause of Loss:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 641,
          right_text:
            '(a) To avoid or minimize the "suspension" of business and to continue "operations"; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 642,
          right_text:
            '(b) To minimize the "suspension" of business if you cannot continue "operations".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 643,
          right_text: '(6) Newly Acquired Locations',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 644,
          right_text:
            'When the Scheduled Location endorsement is attached to this policy, the insurance provided by this coverage is extended as follows:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 645,
          right_text:
            '(a) Business Income And Extra Expense/Dwelling Loss Of Use Coverage is extended to apply to property at any location you acquire other than fairs or exhibitions.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 646,
          right_text:
            '(b) The most we will pay under this Extension, for the sum of Business Income loss and Extra Expense incurred, is $250,000 per location.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 647,
          right_text:
            '(c) Insurance under this Extension for each newly acquired location will end when any of the following first occurs:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 648,
          right_text: '(i) This policy expires;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 649,
          right_text:
            '(ii) 90 days expire after you acquire or begin to construct the property; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 650,
          right_text: '(iii) You report values to us.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 651,
          right_text:
            'We will charge you additional premium for values reported from the date you acquire the property.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 652,
          right_text:
            'This Extension is additional insurance. The Additional Condition, Coinsurance, does not apply to this Extension.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 653,
          right_text: '(7) Interruption Of Computer Operations',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 654,
          right_text:
            '(a) Subject to all provisions of this Additional Coverage - Interruption Of Computer Operations, the insurance that applies to Business Income and Extra Expense is extended to apply to a "suspension" of "operations" caused by an interruption in "computer" operations due to destruction or corruption of "electronic data" due to a Covered Cause of Loss.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 655,
          right_text:
            '(b) The Covered Causes of Loss applicable to this Additional Coverage - Interruption Of Computer Operations are limited to the "specified causes of loss", Collapse and a virus, harmful code or similar instruction introduced into or enacted on a "computer" system (including "electronic data") or a network to which it is connected, designed to damage or destroy any part of the system or disrupt its normal operation. But there is no coverage for an interruption related to manipulation of a "computer" system (including "electronic data") by any employee, including a temporary or leased employee other than as required by that employee\'s responsibilities. Similarly there is no coverage for an interruption related to manipulation of a "computer" system (including "electronic data") by an entity retained by you or for you to inspect, design, install, maintain, repair, or replace that system other than as required by that entity\'s responsibilities.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 656,
          right_text:
            '(c) The most we will pay under this Additional Coverage - Interruption Of Computer Operations is $50,000 for all loss sustained and expense incurred in any one policy year, regardless of the number of interruptions or the number of "covered locations" or "computer" systems involved. If loss payment relating to the first interruption does not exhaust this amount, then the balance is available for loss or expense sustained or incurred as a result of subsequent interruptions in that policy year. A balance remaining at the end of a policy year does not increase the amount of insurance in the next policy year. With respect to any interruption which begins in one policy year and continues or results in additional loss or expense in a subsequent policy year(s), all loss and expense is deemed to be sustained or incurred in the policy year in which the interruption began.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 657,
          right_text:
            '(d) This Additional Coverage - Interruption Of Computer Operations does not apply to loss sustained or expense incurred after the end of the "period of restoration", even if the amount of insurance stated in Paragraph (c) above has not been exhausted.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 658,
          right_text: '(8) Food Contamination',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 659,
          right_text:
            '(a) If your business at a "covered location" is ordered closed by the Board of Health or any other governmental authority as a result of the discovery or suspicion of food contamination, we will pay:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 660,
          right_text:
            '(i) Your expense to clean your equipment as required by the Board of Health or any other governmental authority;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 661,
          right_text:
            '(ii) Your cost to replace the food which is, or is suspected to be, contaminated;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 662,
          right_text:
            "(iii) Your expense to provide necessary medical tests or vaccinations for your infected employees. However, we will not pay for any expense that is otherwise covered under a Workers' Compensation Policy;",
        },
        {
          left_line: null,
          left_text: '',
          right_line: 663,
          right_text:
            '(iv) The loss of Business Income you sustain due to the necessary "suspension" of your "operations". The coverage for Business Income will begin 24 hours after you receive notice of closing from the Board of Health or any other governmental authority; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 664,
          right_text:
            '(v) Additional advertising expenses you incur to restore your reputation.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 665,
          right_text:
            '(b) The most we will pay for any one occurrence for loss under Paragraphs (a)(i) through (a)(iv), including Business Income, is $25,000, unless a different Limit Of Insurance for food contamination is shown in the Declarations.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 666,
          right_text:
            'The most we will pay for any one occurrence for loss under Paragraph (a)(v) is $10,000, unless a different Limit Of Insurance for Food Contamination Advertising Expense is shown in the Declarations.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 667,
          right_text:
            '(c) We will not pay for any fines or penalties levied against you by the Board of Health or any other governmental authority as a result of the discovery or suspicion of food contamination at the "covered location".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 668,
          right_text:
            '(d) Food contamination means an incidence of food poisoning to one or more individuals as a result of:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 669,
          right_text: '(i) Tainted food you purchased;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 670,
          right_text:
            '(ii) Food which has been improperly stored, handled, prepared or manufactured; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 671,
          right_text:
            '(iii) A communicable disease transmitted through you or one or more of your "employees".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 672,
          right_text: 'B. Covered Causes Of Loss',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 673,
          right_text:
            'Covered Causes of Loss means Risks of Direct Physical Loss unless the loss is:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 674,
          right_text: '1. Excluded in Section C. Exclusions; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 675,
          right_text: '2. Limited in Section D. Limitations.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 676,
          right_text: 'C. Exclusions',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 677,
          right_text:
            '1. We will not pay for loss or damage caused directly or indirectly by any of the following. Such loss or damage is excluded regardless of any other cause or event that contributes concurrently or in any sequence to the loss or damage. Exclusions C.1.a. through C.1.k. apply whether or not the loss event results in widespread damage or affects a substantial area.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 678,
          right_text: 'a. Earth Movement',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 679,
          right_text:
            '(1) Earthquake, including any earth sinking, rising or shifting related to such event;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 680,
          right_text:
            '(2) Landslide, including any earth sinking, rising or shifting related to such event;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 681,
          right_text:
            '(3) Mine subsidence, meaning subsidence of a man-made mine, whether or not mining activity has ceased;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 682,
          right_text:
            '(4) Earth sinking (other than sinkhole collapse), rising or shifting including soil conditions which cause settling, cracking or other disarrangement of foundations or other parts of realty. Soil conditions include contraction, expansion, freezing, thawing, erosion, improperly compacted soil and the action of water under the ground surface.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 683,
          right_text:
            'But if Earth Movement, as described in Paragraphs a.(1) through a.(4) above, results in fire or explosion, we will pay for the loss or damage caused by that fire or explosion.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 684,
          right_text:
            '(5) Volcanic eruption, explosion or effusion. But if volcanic eruption, explosion or effusion results in fire, building glass breakage or Volcanic Action, we will pay for the loss or damage caused by that fire, building glass breakage or Volcanic Action.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 685,
          right_text:
            'Volcanic Action means direct loss or damage resulting from the eruption of a volcano when the loss or damage is caused by:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 686,
          right_text: '(a) Airborne volcanic blast or airborne shock waves;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 687,
          right_text: '(b) Ash, dust or particulate matter; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 688,
          right_text: '(c) Lava flow.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 689,
          right_text:
            'All volcanic eruptions that occur within any 168-hour period will constitute a single occurrence.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 690,
          right_text:
            'Volcanic Action does not include the cost to remove ash, dust or particulate matter that does not cause direct physical loss or damage to your "covered location".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 691,
          right_text:
            'This exclusion does not apply to "accounts receivable", "computers", property on exhibition, "fine arts", "mobile equipment", property in transit, salespersons\' samples or "valuable papers and records".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 692,
          right_text: 'b. Governmental Action',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 693,
          right_text:
            'Seizure or destruction of property by order of government authority. But we will pay for loss or damage caused by or resulting from acts of destruction ordered by governmental authority and taken at the time of a fire to prevent its spread, if the fire would be covered under this policy.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 694,
          right_text: 'c. Intentional Loss',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 695,
          right_text:
            'We will not pay for loss or damage arising out of any act an insured commits or conspires to commit with the intent to cause a loss.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 696,
          right_text:
            'In the event of such loss, no insured is entitled to coverage, even insureds who did not commit or conspire to commit the act causing the loss.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 697,
          right_text: 'd. Nuclear Hazard',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 698,
          right_text:
            'Nuclear reaction or radiation, or radioactive contamination, however caused.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 699,
          right_text:
            'But if nuclear reaction or radiation, or radioactive contamination, results in fire, we will pay for the loss or damage caused by that fire.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 700,
          right_text: 'e. Utility Services',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 701,
          right_text:
            'The failure of power, communication, water or other utility service supplied to your "covered location", however caused, if the failure originates outside of a covered building. Failure of any utility service includes lack of sufficient capacity and reduction in supply.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 702,
          right_text:
            'Loss or damage caused by a surge of power is also excluded, if the surge would not have occurred but for an event causing a failure of power.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 703,
          right_text:
            'But if the failure or surge of power, or the failure of communication, water or other utility service, results in a Covered Cause of Loss, we will pay for the loss or damage caused by that Covered Cause of Loss.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 704,
          right_text:
            'Communication services include but are not limited to service relating to Internet access or access to any electronic, cellular, or satellite network.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 705,
          right_text:
            'This exclusion does not apply to resulting loss to "computers".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 706,
          right_text: 'f. War And Military Action',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 707,
          right_text: '(1) War, including undeclared or civil war;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 708,
          right_text:
            '(2) Warlike action by a military force, including action in hindering or defending against an actual or expected attack, by any government, sovereign or other authority using military personnel or other agents; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 709,
          right_text:
            '(3) Insurrection, rebellion, revolution, usurped power, or action taken by governmental authority in hindering or defending against any of these.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 710,
          right_text: 'g. Water',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 711,
          right_text:
            '(1) Flood, surface water, waves (including tidal wave and tsunami), tides, tidal water, overflow of any body of water, or spray from any of these, all whether or not driven by wind (including storm surge);',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 712,
          right_text: '(2) Mudslide or mudflow;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 713,
          right_text:
            '(3) Water that backs up or overflows or is otherwise discharged from a sewer, drain, sump, sump pump or related equipment;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 714,
          right_text:
            '(4) Water under the ground surface pressing on, or flowing or seeping through:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 715,
          right_text: '(a) Foundations, walls, floors or paved surfaces;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 716,
          right_text: '(b) Basements, whether paved or not; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 717,
          right_text: '(c) Doors, windows or other openings; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 718,
          right_text:
            '(5) Waterborne material carried or otherwise moved by any of the water referred to in Paragraph (1), (3) or (4), or material carried or otherwise moved by mudslide or mudflow.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 719,
          right_text:
            'This exclusion applies regardless of whether any of the above, in Paragraphs (1) through (5), is caused by an act of nature or is otherwise caused. An example of a situation to which this exclusion applies is the situation where a dam, levee, seawall or other boundary or containment system fails in whole or in part, for any reason, to contain the water.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 720,
          right_text:
            'But if any of the above, in Paragraphs (1) through (5), results in fire, explosion or sprinkler leakage, we will pay for the loss or damage caused by that fire, explosion or sprinkler leakage.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 721,
          right_text:
            'This exclusion does not apply to "accounts receivable", "computers", property on exhibition, "fine arts", "mobile equipment", property in transit, salespersons\' samples or "valuable papers and records".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 722,
          right_text: 'h. Certain Computer-related Losses',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 723,
          right_text: '(1) The failure, malfunction or inadequacy of:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 724,
          right_text:
            '(a) Any of the following, whether belonging to any insured or to others:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 725,
          right_text: '(i) "Computer" hardware, including microprocessors;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 726,
          right_text: '(ii) "Computer" application software;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 727,
          right_text:
            '(iii) "Computer" operating systems and related software;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 728,
          right_text: '(iv) "Computer" networks;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 729,
          right_text:
            '(v) Microprocessors ("computer" chips) not part of any "computer" system; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 730,
          right_text:
            '(vi) Any other computerized or electronic equipment or components; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 731,
          right_text:
            '(b) Any other products, and any services, data or functions, that directly or indirectly use or rely upon, in any manner, any of the items listed in Paragraph C.1.h.(1)(a) above; due to the inability to correctly recognize, process, distinguish, interpret or accept one or more dates or times. An example is the inability of "computer" software to recognize the year 2000.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 732,
          right_text:
            '(2) Any advice, consultation, design, evaluation, inspection, installation, maintenance, repair, replacement or supervision provided or done by you or for you to determine, rectify or test for, any potential or actual problems described in Paragraph C.1.h.(1) above.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 733,
          right_text:
            'If an excluded Cause of Loss as described in Paragraphs C.1.h.(1) and C.1.h.(2) above results in a "specified cause of loss", or in elevator collision resulting from mechanical breakdown, we will pay only for the loss or damage caused by such "specified cause of loss" or elevator collision.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 734,
          right_text:
            'We will not pay for repair, replacement or modification of any items in Paragraphs C.1.h.(1) and C.1.h.(2) above to correct any deficiencies or change any features.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 735,
          right_text: 'i. Ordinance Or Law',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 736,
          right_text: '(1) The enforcement of any ordinance or law:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 737,
          right_text:
            '(a) Regulating the construction, use or repair of any property; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 738,
          right_text:
            '(b) Requiring the tearing down of any property, including the cost of removing its debris.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 739,
          right_text:
            '(2) This exclusion, Ordinance Or Law, applies whether the loss results from:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 740,
          right_text:
            '(a) An ordinance or law that is enforced even if the property has not been damaged; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 741,
          right_text:
            '(b) The increased costs incurred to comply with an ordinance or law in the course of construction, repair, renovation, remodeling or demolition of property, or removal of its debris, following a physical loss to that property.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 742,
          right_text:
            '(3) This exclusion applies except to the extent coverage is provided within the Ordinance Or Law Coverage.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 743,
          right_text: 'j. Fungi Or Wet Or Dry Rot',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 744,
          right_text:
            'Presence, growth, proliferation, spread or any activity of "fungi" or wet or dry rot.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 745,
          right_text:
            'But if "fungi" or wet or dry rot results in a "specified cause of loss", we will pay for the loss or damage caused by that "specified cause of loss".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 746,
          right_text: 'This exclusion does not apply:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 747,
          right_text:
            '(1) When "fungi" or wet or dry rot results from fire or lightning; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 748,
          right_text:
            '(2) To the extent that coverage is provided by the Limited Coverage For "Fungi", Wet Rot And Dry Rot Additional Coverage with respect to loss or damage by a Cause of Loss other than fire or lightning.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 749,
          right_text: 'k. Virus Or Bacteria',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 750,
          right_text:
            '(1) We will not pay for loss or damage caused by or resulting from any virus, bacterium or other microorganism that induces or is capable of inducing physical distress, illness or disease.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 751,
          right_text:
            '(2) However, the exclusion in Paragraph (1) does not apply to the following:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 752,
          right_text:
            '(a) Loss or damage caused by or resulting from "fungi" or wet rot or dry rot. Such loss or damage is addressed in Exclusion j.; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 753,
          right_text:
            '(b) Coverage otherwise provided under the Business Income And Extra Expense/Dwelling Loss Of Use Additional Coverage for Food Contamination.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 754,
          right_text:
            '(3) With respect to any loss or damage subject to the exclusion in Paragraph (1), such exclusion supersedes any exclusion relating to "pollutants".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 755,
          right_text:
            '2. We will not pay for loss or damage caused by or resulting from any of the following:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 756,
          right_text: 'a. Electrical Apparatus',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 757,
          right_text:
            'Artificially generated electrical, magnetic or electromagnetic energy that damages, disturbs, disrupts or otherwise interferes with any:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 758,
          right_text:
            '(1) Electrical or electronic wire, device, appliance, system or network; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 759,
          right_text:
            '(2) Device, appliance, system or network utilizing cellular or satellite technology.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 760,
          right_text:
            'For the purpose of this exclusion, electrical, magnetic or electromagnetic energy includes but is not limited to:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 761,
          right_text: '(1) Electrical current, including arcing;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 762,
          right_text:
            '(2) Electrical charge produced or conducted by a magnetic or electromagnetic field;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 763,
          right_text: '(3) Pulse of electromagnetic energy; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 764,
          right_text: '(4) Electromagnetic waves or microwaves.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 765,
          right_text:
            'But if fire results, we will pay for the loss or damage caused by that fire.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 766,
          right_text:
            'This exclusion does not apply to resulting loss to "computers".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 767,
          right_text: 'b. Consequential Loss',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 768,
          right_text: '(1) Delay, loss of use or loss of market; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 769,
          right_text:
            '(2) Loss of business income and extra expense, except to the extent of coverage specifically provided under Business Income And Extra Expense in Paragraph A.7. of this policy (but this exception only applies if a Limit Of Insurance is shown for Business Income And Extra Expense in the Declarations or Scheduled Location endorsement).',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 770,
          right_text: 'c. Smoke, Vapor, Gas',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 771,
          right_text:
            'Smoke, vapor or gas from agricultural smudging or industrial operations.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 772,
          right_text:
            'This exclusion does not apply to emissions or puff backs of smoke, soot, fumes or vapors from a boiler, furnace or related equipment.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 773,
          right_text: 'This exclusion does not apply to "mobile equipment".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 774,
          right_text: 'd. Other Types Of Losses',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 775,
          right_text: '(1) Wear and Tear;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 776,
          right_text:
            '(2) Rust or other corrosion, decay, deterioration, hidden or latent defect or any quality in property that causes it to damage or destroy itself;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 777,
          right_text: '(3) Smog;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 778,
          right_text:
            '(4) Settling, cracking, shrinking, bulging or expansion;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 779,
          right_text:
            '(5) Nesting or infestation, or discharge or release of waste products or secretions, by birds, insects, rodents and any other animals;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 780,
          right_text:
            '(6) Mechanical breakdown, including rupture or bursting caused by centrifugal force. But if mechanical breakdown results in elevator collision, we will pay for the loss or damage caused by that elevator collision;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 781,
          right_text:
            '(7) The following Causes of Loss to Business Personal Property and Household Personal Property:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 782,
          right_text: '(a) Dampness or dryness of atmosphere;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 783,
          right_text: '(b) Changes in or extremes of temperatures.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 784,
          right_text:
            'This exclusion does not apply to loss or damage to "computers" caused by dampness or dryness of atmosphere or changes in or extremes of temperatures resulting from direct damage from a Covered Cause of Loss to your air conditioning equipment that services your "computers";',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 785,
          right_text:
            '(8) Marring or scratching to Business Personal Property or Household Personal Property;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 786,
          right_text:
            '(9) Theft of Household Personal Property 1,000 feet or more away from your primary residence at a "covered location".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 787,
          right_text:
            'However, if you are an individual, this exclusion does not apply to the theft of Household Personal Property:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 788,
          right_text:
            '(a) From a location where you or any "family member", other than a student enrolled full-time, is temporarily residing; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 789,
          right_text:
            '(b) From you or any "family member" who is a student enrolled full-time provided the student was residing at a location, other than your primary residence, at any time during the 60 days immediately preceding the loss.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 790,
          right_text:
            'This exclusion also does not apply to the extent that coverage is provided under the following Additional Crime Coverages:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 791,
          right_text: '(a) Employee Theft; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 792,
          right_text:
            '(b) Credit Card And Electronic Fund Transfer Cards Or Other Access Devices; Forgery; Counterfeit Money; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 793,
          right_text:
            '(10) Fire, loss or damage sustained by buildings, or contents usual to a tobacco barn, if that loss or damage:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 794,
          right_text:
            '(a) Results from the use of open fire for curing or drying tobacco in the barn; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 795,
          right_text:
            '(b) Occurs during, or within the five-day period following, open-fire curing or drying.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 796,
          right_text:
            'But if an excluded Cause of Loss that is listed in Paragraphs 2.d.(1) through 2.d.(10) results in a "specified cause of loss" or building glass breakage, we will pay for the loss or damage caused by that "specified cause of loss" or building glass breakage.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 797,
          right_text: 'e. Explosion',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 798,
          right_text:
            '(1) Explosion of alcohol stills, steam boilers, steam generators, steam pipes, steam engines or steam turbines owned or leased by you, or operated under your control;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 799,
          right_text: '(2) Electric arcing;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 800,
          right_text: '(3) Rupture or bursting of water pipes;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 801,
          right_text:
            '(4) Rupture, bursting or operation of pressure relief devices; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 802,
          right_text:
            '(5) Rupture or bursting due to expansion or swelling of the contents of any building or structure caused by or resulting from water.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 803,
          right_text:
            'But if explosion of alcohol stills, steam boilers, steam generators, steam pipes, steam engines or steam turbines results in fire or combustion explosion, we will pay for the loss or damage caused by that fire or combustion explosion. We will also pay for loss or damage caused by or resulting from the explosion of gases or fuel within the furnace of any fired vessel or within the flues or passages through which the gases of combustion pass.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 804,
          right_text: 'f. Liquid Seepage Or Leakage',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 805,
          right_text:
            'Continuous or repeated seepage or leakage of liquid (other than a "pollutant"), or the presence or condensation of humidity, moisture or vapor (other than a "pollutant"), that occurs over a period of 14 days or more.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 806,
          right_text:
            'This exclusion does not apply to unintended leakage covered under Additional Coverage - Bulk Liquid Tank Storage.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 807,
          right_text: 'g. Frozen Plumbing',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 808,
          right_text:
            'Water, other liquids, powder or molten material that leaks or flows from plumbing, heating, air conditioning, ventilation or other equipment (except fire protective systems) caused by or resulting from freezing, unless:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 809,
          right_text:
            '(1) You do your best to maintain heat in the building or structure; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 810,
          right_text:
            '(2) You drain the equipment and shut off the supply if the heat is not maintained.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 811,
          right_text:
            'If loss or damage caused by or resulting from covered water or other liquid, powder or molten material occurs, we will also pay the cost to tear out and replace any part of the building or structure to repair damage to the system or appliance from which the water or other substance escapes.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 812,
          right_text: 'h. Dishonesty',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 813,
          right_text:
            'Dishonest or criminal act by you, any of your partners, "members", officers, "managers", "employees" (including leased "employees"), directors, trustees, authorized representatives or anyone to whom you entrust the property for any purpose:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 814,
          right_text: '(1) Acting alone or in collusion with others; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 815,
          right_text:
            '(2) Whether or not occurring during the hours of employment.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 816,
          right_text:
            'This exclusion does not apply to acts of destruction by your "employees" (including leased "employees"); but theft by "employees" (including leased "employees") is not covered.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 817,
          right_text:
            'This exclusion applies except to the extent coverage is provided within the Employee Theft coverage.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 818,
          right_text: 'This exclusion does not apply to carriers for hire.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 819,
          right_text: 'i. False Pretense',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 820,
          right_text:
            'Voluntary parting with any property by you or anyone else to whom you have entrusted the property if induced to do so by any fraudulent scheme, trick, device or false pretense, except as specifically provided elsewhere in this policy.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 821,
          right_text: 'j. Exposed Property',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 822,
          right_text:
            'Rain, snow, ice or sleet to Business Personal Property or Household Personal Property in the open.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 823,
          right_text:
            'This exclusion does not apply to "mobile equipment" or property in the custody of carriers for hire.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 824,
          right_text: 'k. Pollution',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 825,
          right_text:
            'Discharge, dispersal, seepage, migration, release or escape of "pollutants" unless the discharge, dispersal, seepage, migration, release or escape is itself caused by any of the "specified causes of loss". But if the discharge, dispersal, seepage, migration, release or escape of "pollutants" results in a "specified cause of loss", we will pay for the loss or damage caused by that "specified cause of loss".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 826,
          right_text: 'l. Neglect',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 827,
          right_text:
            'Neglect of an insured to use all reasonable means to save and preserve property from further damage at and after the time of loss.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 828,
          right_text: 'm. Errors Or Omissions',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 829,
          right_text:
            'Errors or omissions in processing, recording or storing information on recording or storage media or "computers".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 830,
          right_text:
            'However, we will pay for direct loss or damage caused by resulting fire or explosion if these Causes of Loss would be covered by this policy.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 831,
          right_text: 'n. Installation, Testing, Repair',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 832,
          right_text:
            'Installation, testing, repair or other similar service performed upon the "computer" software or "computers", including parts.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 833,
          right_text:
            'However, we will pay for direct loss or damage caused by resulting fire or explosion if these Causes of Loss would be covered by this policy.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 834,
          right_text: 'o. Collapse',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 835,
          right_text:
            'Collapse, including any of the following conditions of property or any part of the property:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 836,
          right_text: '(1) An abrupt falling down or caving in;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 837,
          right_text:
            '(2) Loss of structural integrity, including separation of parts of the property or property in danger of falling down or caving in; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 838,
          right_text:
            '(3) Any cracking, bulging, sagging, bending, leaning, settling, shrinkage, or expansion as such condition relates to Paragraph (1) or (2) above.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 839,
          right_text:
            'But if collapse results in a Covered Cause of Loss at a "covered location", we will pay for the loss or damage caused by that Covered Cause of Loss.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 840,
          right_text: 'This Exclusion o. does not apply:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 841,
          right_text:
            '(a) To the extent that coverage is provided under the Additional Coverage - Collapse; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 842,
          right_text: '(b) To collapse caused by one or more of the following:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 843,
          right_text: '(i) The "specified causes of loss":',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 844,
          right_text: '(ii) Breakage of building glass;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 845,
          right_text: '(iii) Weight of rain that collects on a roof; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 846,
          right_text: '(iv) Weight of people or personal property.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 847,
          right_text: 'p. Collision, Upset Or Overturn',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 848,
          right_text:
            'Collision, upset or overturn of covered "mobile equipment", to the extent of any loss of or damage to the tires or inner tubes of such covered "mobile equipment". But we will pay for the loss of or damage to the tires or inner tubes if the same accident causes other covered loss to the same covered "mobile equipment".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 849,
          right_text: 'q. Foreign Objects',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 850,
          right_text:
            'Foreign objects while in the process of being taken into, or after having been taken into, covered "mobile equipment".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 851,
          right_text:
            '3. We will not pay for loss or damage caused by or resulting from any of the following, Paragraphs 3.a. through 3.c. But if an excluded Cause of Loss that is listed in Paragraphs 3.a. through 3.c. results in a Covered Cause of Loss, we will pay for the loss or damage caused by that Covered Cause of Loss.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 852,
          right_text: 'a. Weather Conditions',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 853,
          right_text:
            'Weather conditions. But this exclusion only applies if weather conditions contribute in any way with a cause or event excluded in Paragraph 1. above to produce the loss or damage.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 854,
          right_text: 'b. Acts Or Decisions',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 855,
          right_text:
            'Acts or decisions, including the failure to act or decide, of any person, group, organization or governmental body.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 856,
          right_text: 'c. Plan, Design Faults',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 857,
          right_text: 'Faulty, inadequate or defective:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 858,
          right_text: '(1) Planning, zoning, development, surveying, siting;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 859,
          right_text:
            '(2) Design, specifications, workmanship, repair, construction, renovation, remodeling, grading, compaction;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 860,
          right_text:
            '(3) Materials used in repair, construction, renovation or remodeling; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 861,
          right_text: '(4) Maintenance;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 862,
          right_text:
            'of part or all of any property on or off your "covered locations".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 863,
          right_text: '4. Special Exclusions',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 864,
          right_text:
            'The following provision(s) applies only to the coverages in Paragraphs a., b. and c. below.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 865,
          right_text: 'a. Business Income And Extra Expense Coverage',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 866,
          right_text: 'We will not pay for:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 867,
          right_text: '(1) Any loss caused by or resulting from:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 868,
          right_text: '(a) Damage or destruction of "finished stock"; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 869,
          right_text: '(b) The time required to reproduce "finished stock".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 870,
          right_text: 'This exclusion does not apply to Extra Expense.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 871,
          right_text:
            '(2) Any loss caused by or resulting from direct physical loss or damage to radio or television antennas (including satellite dishes) and their lead-in wiring, masts or towers.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 872,
          right_text: '(3) Any increase of loss caused by or resulting from:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 873,
          right_text:
            '(a) Delay in rebuilding, repairing or replacing the property or resuming "operations", due to interference at the location of the rebuilding, repair or replacement by strikers or other persons; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 874,
          right_text:
            '(b) "Suspension", lapse or cancellation of any license, lease or contract. But if the "suspension", lapse or cancellation is directly caused by the "suspension" of "operations", we will cover such loss that affects your Business Income during the "period of restoration" and any extension of the "period of restoration" in accordance with the terms of the Extended Business Income Additional Coverage or any variation of it.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 875,
          right_text:
            '(4) Any Extra Expense caused by or resulting from "suspension", lapse or cancellation of any license, lease or contract beyond the "period of restoration".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 876,
          right_text: '(5) Any other consequential loss.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 877,
          right_text: 'b. Valuable Papers And Records',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 878,
          right_text: 'We will not pay for:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 879,
          right_text: '(1) Errors or omissions in processing or copying.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 880,
          right_text:
            '(2) Electrical or magnetic injury, disturbance or erasure of electronic records.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 881,
          right_text:
            '(3) Unauthorized instructions to transfer property to any person or to any place.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 882,
          right_text: 'c. Accounts Receivable',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 883,
          right_text: 'We will not pay for:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 884,
          right_text:
            '(1) Loss or damage caused by or resulting from alteration, falsification, concealment or destruction of records of "accounts receivable" done to conceal the wrongful giving, taking or withholding of "money", "securities" or other property.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 885,
          right_text:
            '(2) Loss or damage caused by or resulting from bookkeeping, accounting or billing errors or omissions.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 886,
          right_text:
            '(3) Any loss or damage that requires any audit of records or any inventory computation to prove its factual existence.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 887,
          right_text: '5. Additional Exclusion',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 888,
          right_text:
            'The following provisions apply only to the specified property:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 889,
          right_text: 'Loss Or Damage To Products',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 890,
          right_text:
            'We will not pay for loss or damage to any merchandise, goods or other product caused by or resulting from error or omission by any person or entity (including those having possession under an arrangement where work or a portion of the work is outsourced) in any stage of the development, production or use of the product, including planning, testing, processing, packaging, installation, maintenance or repair. This exclusion applies to any effect that compromises the form, substance, or quality of the product. But if such error or omission results in a Covered Cause of Loss, we will pay for the loss or damage caused by that Covered Cause of Loss.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 891,
          right_text: 'D. Limitations',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 892,
          right_text:
            'The following limitations apply to the coverage form and endorsements, unless otherwise stated.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 893,
          right_text:
            '1. We will not pay for loss of or damage to property, as described and limited in this section. In addition, we will not pay for any loss that is a consequence of loss or damage as described and limited in this section.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 894,
          right_text:
            'a. Steam boilers, steam pipes, steam engines or steam turbines caused by or resulting from any condition or event inside such equipment. But we will pay for such loss of or damage to such equipment caused by or resulting from an explosion of gases or fuel within the furnace of any fired vessel or within the flues or passages through which the gases of combustion pass.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 895,
          right_text:
            'b. Hot water boilers or other water heating equipment caused by or resulting from any condition or event inside such boiler or equipment, other than an explosion.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 896,
          right_text:
            'c. The interior of any building or structure, or to Business Personal Property or Household Personal Property in the building or structure, caused by or resulting from rain, snow, sleet, ice, sand or dust, whether driven by wind or not, unless:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 897,
          right_text:
            '(1) The building or structure first sustains damage by a Covered Cause of Loss to its roof or walls through which the rain, snow, sleet, ice, sand or dust enters; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 898,
          right_text:
            '(2) The loss or damage is caused by or results from thawing of snow, sleet or ice on the building or structure.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 899,
          right_text:
            'd. Property that is missing, where the only evidence of the loss or damage is a shortage disclosed on taking inventory, or other instances where there is no physical evidence to show what happened to the property. However, this provision does not apply to coverage provided under Additional Crime Coverage A.6.c., Money And Securities.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 900,
          right_text:
            'e. Property that has been transferred to a person or to a place outside your "covered location" on the basis of unauthorized instructions.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 901,
          right_text:
            '2. We will not pay for loss of or damage to the following types of property unless caused by a "specified cause of loss" or building glass breakage:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 902,
          right_text:
            'a. Fragile articles such as glassware, statuary, marbles, chinaware and porcelains, if broken. This restriction does not apply to:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 903,
          right_text: '(1) Glass that is part of a building or structure;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 904,
          right_text: '(2) Containers of property held for sale;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 905,
          right_text: '(3) Photographic or scientific instrument lenses; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 906,
          right_text: '(4) "Fine arts".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 907,
          right_text:
            "b. Builders' machinery, tools and equipment owned by you or entrusted to you.",
        },
        {
          left_line: null,
          left_text: '',
          right_line: 908,
          right_text: 'However, this limitation does not apply:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 909,
          right_text:
            '(1) If the property is located on or within 1,000 feet of your "covered location"; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 910,
          right_text:
            '(2) To Business Income And Extra Expense/Dwelling Loss Of Use Coverage.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 911,
          right_text:
            '3. The special limit shown for each category, Paragraphs a. through d., is the total limit for loss of or damage to all property in that category, unless a different Limit Of Insurance is shown in the Declarations. The limit applies to any one occurrence of theft, regardless of the types or number of articles that are lost or damaged in that occurrence. The special limits are:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 912,
          right_text:
            'a. $5,000 for furs, fur garments and garments trimmed with fur.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 913,
          right_text:
            'b. $5,000 for jewelry, watches, watch movements, jewels, pearls, precious and semi-precious stones, bullion, gold, silver, platinum, and other precious alloys or metals. This limit does not apply to jewelry and watches worth $100 or less per item.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 914,
          right_text:
            'c. $10,000 per occurrence, but not more than $2,500 per firearm or related equipment. These limits apply regardless of the types or numbers of items lost or damaged in that occurrence.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 915,
          right_text:
            'd. $5,000 for platinumware, platinum-plated ware, goldware, gold-plated ware, silverware, silver-plated ware and pewterware. This includes flatware, hollowware, tea sets, trays, trophies and other similar property made of, in whole or in part, platinum, gold, silver or pewter.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 916,
          right_text:
            'These special limits are part of, not in addition to, the Limit of Insurance applicable to the Covered Property.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 917,
          right_text:
            'This limitation, Paragraph D.3., does not apply to Business Income And Extra Expense/Dwelling Loss Of Use Coverage.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 918,
          right_text:
            '4. We will not pay the cost to repair any defect to a system or appliance from which water, other liquid, powder or molten material escapes. But we will pay the cost to repair or replace damaged parts of fire extinguishing equipment if the damage:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 919,
          right_text:
            'a. Results in discharge of any substance from an automatic fire protection system; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 920,
          right_text: 'b. Is directly caused by freezing.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 921,
          right_text:
            'However, this limitation, Paragraph D.4., does not apply to Business Income And Extra Expense/Dwelling Loss Of Use Coverage.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 922,
          right_text: 'E. Additional Coverage - Collapse',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 923,
          right_text:
            'The coverage provided under this Additional Coverage - Collapse applies only to an abrupt collapse as described and limited in Paragraphs E.1. through E.7.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 924,
          right_text:
            '1. For the purpose of this Additional Coverage - Collapse, abrupt collapse means an abrupt falling down or caving in of a building or any part of a building with the result that the building or part of the building cannot be occupied for its intended purpose.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 925,
          right_text:
            '2. We will pay for direct physical loss of or damage to Covered Property, caused by abrupt collapse of a building or any part of a building that is insured under this coverage form or that contains Covered Property insured under this coverage form, if such collapse is caused by one or more of the following:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 926,
          right_text:
            'a. Building decay that is hidden from view, unless the presence of such decay is known to an insured prior to collapse;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 927,
          right_text:
            'b. Insect or vermin damage that is hidden from view, unless the presence of such damage is known to an insured prior to collapse;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 928,
          right_text:
            'c. Use of defective material or methods in construction, remodeling or renovation if the abrupt collapse occurs during the course of the construction, remodeling or renovation; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 929,
          right_text:
            'd. Use of defective material or methods in construction, remodeling or renovation if the abrupt collapse occurs after the construction, remodeling, or renovation is complete, but only if the collapse is caused in part by:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 930,
          right_text: '(1) A cause of loss listed in Paragraph 2.a. or 2.b.;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 931,
          right_text: '(2) One or more of the "specified causes of loss";',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 932,
          right_text: '(3) Breakage of building glass;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 933,
          right_text: '(4) Weight of people or property; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 934,
          right_text: '(5) Weight of rain that collects on a roof.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 935,
          right_text:
            '3. This Additional Coverage - Collapse does not apply to:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 936,
          right_text:
            'a. A building or any part of a building that is in danger of falling down or caving in;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 937,
          right_text:
            'b. A part of a building that is standing, even if it has separated from another part of the building; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 938,
          right_text:
            'c. A building that is standing or any part of a building that is standing, even if it shows evidence of cracking, bulging, sagging, bending, leaning, settling, shrinkage or expansion.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 939,
          right_text: '4. With respect to the following property:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 940,
          right_text:
            'a. Television and radio towers, antennas, satellite dishes, guy wires, lead-in wiring and masts;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 941,
          right_text: 'b. Awnings, canopies, gutters, downspouts and fences;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 942,
          right_text: 'c. Yard fixtures;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 943,
          right_text: 'd. Outdoor swimming pools;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 944,
          right_text: 'e. Bulkheads, pilings, piers, wharves and docks;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 945,
          right_text: 'f. Beach or diving platforms or appurtenances;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 946,
          right_text: 'g. Retaining walls;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 947,
          right_text: 'h. Underground pipes, flues or drains; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 948,
          right_text: 'i. Walkways, roadways and other paved surfaces;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 949,
          right_text:
            'if the abrupt collapse is caused by a Cause of Loss listed in Paragraphs 2.a. through 2.d. above, we will pay for loss or damage to that property only if:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 950,
          right_text:
            'a. Such loss or damage is a direct result of the abrupt collapse of a building insured under this coverage form; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 951,
          right_text:
            'b. The property is Covered Property under this coverage form.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 952,
          right_text:
            '5. If personal property abruptly falls down or caves in and such collapse is not the result of abrupt collapse of a building, we will pay for loss or damage to Covered Property caused by the collapse of such personal property only if:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 953,
          right_text:
            'a. The collapse of personal property was caused by a cause of loss listed in Paragraphs 2.a. through 2.d. above;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 954,
          right_text:
            'b. The personal property which collapses is inside a building; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 955,
          right_text:
            'c. The property which collapses is not of a kind listed in Paragraph 4., regardless of whether that kind of property is considered to be personal property or real property.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 956,
          right_text:
            'The coverage stated in this Paragraph 5. does not apply to personal property if marring and/or scratching is the only damage to that personal property caused by the collapse.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 957,
          right_text:
            '6. This Additional Coverage - Collapse does not apply to personal property that has not abruptly fallen down or caved in, even if the personal property shows evidence of cracking, bulging, sagging, bending, leaning, settling, shrinkage or expansion.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 958,
          right_text:
            '7. This Additional Coverage - Collapse will not increase the Limits of Insurance provided in this Coverage Part.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 959,
          right_text:
            '8. The term Covered Cause of Loss includes the Additional Coverage - Collapse as described and limited in Paragraphs E.1. through E.7.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 961,
          right_text:
            '1. The most we will pay for loss or damage in any one occurrence is the applicable Limit Of Insurance shown in the Declarations.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 962,
          right_text:
            'However, the Limit of Insurance applicable to Paragraph A.7.e.(6), Newly Acquired Locations, is in addition to the Business Income And Extra Expense Limit of Insurance.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 963,
          right_text:
            '2. Payment under the following Business Income And Extra Expense/Dwelling Loss Of Use Additional Coverages will not increase the applicable Limit of Insurance:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 964,
          right_text: 'a. Alterations And New Buildings;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 965,
          right_text:
            'b. Business Income And Extra Expense Caused By "Dependent Properties";',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 966,
          right_text: 'c. Civil Authority;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 967,
          right_text: 'd. Contractual Penalties;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 968,
          right_text: 'e. Extended Business Income;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 969,
          right_text: 'f. Food Contamination; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 970,
          right_text: 'g. Interruption Of Computer Operations.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 971,
          right_text: 'G. Deductible',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 972,
          right_text:
            'In any one occurrence of loss or damage (hereinafter referred to as loss), we will first reduce the amount of the loss if required by any applicable Coinsurance Condition, Agreed Value Optional Coverage or Functional Replacement Cost provision. If the adjusted amount of loss is less than or equal to the Deductible, we will not pay for that loss. If the adjusted amount of loss exceeds the Deductible, we will then subtract the Deductible from the adjusted amount of loss, and will pay the resulting amount or the Limit of Insurance, whichever is less.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 973,
          right_text:
            'When the occurrence involves loss to more than one item of Covered Property and separate Limits of Insurance apply, the losses will not be combined in determining application of the Deductible. But the Deductible will be applied only once per occurrence.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 974,
          right_text:
            'If a covered building is used for both business and residential purposes, then the highest Deductible applicable to that property applies.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 975,
          right_text: 'EXAMPLE NO. 1:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 976,
          right_text: '(This example assumes there is no coinsurance penalty.)',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 977,
          right_text: 'Deductible: $5,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 978,
          right_text: 'Building No. 1 - Limit of Insurance = $600,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 979,
          right_text: 'Building No. 2 - Limit of Insurance = $800,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 980,
          right_text: 'Building No. 1 - Loss = $601,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 981,
          right_text: 'Building No. 2 - Loss = $900,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 982,
          right_text:
            'The amount of loss to Building No. 1 ($601,000) is less than the sum ($605,000) of the Limit of Insurance applicable to Building No. 1 plus the Deductible.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 983,
          right_text:
            'The Deductible will be subtracted from the amount of loss in calculating the loss payable for Building No. 1:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 984,
          right_text: '$',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 985,
          right_text: '601,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 986,
          right_text: '- 5,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 987,
          right_text: '$',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 988,
          right_text: '596,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 989,
          right_text: 'Loss Payable for Building No. 1',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 990,
          right_text:
            'The Deductible applies once per occurrence and therefore is not subtracted in determining the amount of loss payable for Building No. 2. Loss payable for Building No. 2 is the Limit of Insurance of $800,000.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 991,
          right_text: 'Total amount of loss payable:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 992,
          right_text: '$596,000 + $800,000 = $1,396,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 993,
          right_text: 'EXAMPLE NO. 2:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 994,
          right_text:
            '(This example also assumes there is no coinsurance penalty.)',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 995,
          right_text:
            'The Deductible and Limits of Insurance are the same as those in Example No. 1.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 996,
          right_text: 'Building No. 1 -',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 997,
          right_text:
            'Loss = $700,000 (exceeds Limit of Insurance plus Deductible)',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 998,
          right_text: 'Building No. 2 -',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 999,
          right_text:
            'Loss = $900,000 (exceeds Limit of Insurance plus Deductible)',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1000,
          right_text:
            'Loss Payable for Building No. 1 = $600,000 (Limit of Insurance)',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1001,
          right_text:
            'Loss Payable for Building No. 2 = $800,000 (Limit of Insurance)',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1002,
          right_text:
            'Total amount of loss payable: $600,000 + $800,000 = $1,400,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1003,
          right_text: 'H. Loss Conditions',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1004,
          right_text: 'The following conditions apply:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1005,
          right_text: '1. Abandonment',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1006,
          right_text: 'There can be no abandonment of any property to us.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1007,
          right_text: '2. Appraisal',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1008,
          right_text:
            'If we and you disagree on the value of the property, the amount of Net Income and operating expense, or the amount of loss, either may make written demand for an appraisal of the loss. In this event, each party will select a competent and impartial appraiser. The two appraisers will select an umpire. If they cannot agree, either may request that selection be made by a judge of a court having jurisdiction. The appraisers will state separately the value of the property, the amount of Net Income and operating expense, and amount of loss. If they fail to agree, they will submit their differences to the umpire. A decision agreed to by any two will be binding. Each party will:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1009,
          right_text: 'a. Pay its chosen appraiser; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1010,
          right_text:
            'b. Bear the other expenses of the appraisal and umpire equally.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1011,
          right_text:
            'If there is an appraisal, we will still retain our right to deny the claim.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1012,
          right_text: '3. Duties In The Event Of Loss Or Damage',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1013,
          right_text:
            'a. You must ensure that the following are done in the event of loss or damage to Covered Property:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1014,
          right_text: '(1) Notify the police if a law may have been broken.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1015,
          right_text:
            '(2) Give us prompt notice of the loss or damage. Include a description of the property involved.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1016,
          right_text:
            '(3) As soon as possible, give us a description of how, when and where the loss or damage occurred.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1017,
          right_text:
            '(4) Take all reasonable steps to protect the Covered Property from further damage, and keep a record of your expenses necessary to protect the Covered Property, for consideration in the settlement of the claim. This will not increase the Limit of Insurance. However, we will not pay for any subsequent loss or damage resulting from a Cause of Loss that is not a Covered Cause of Loss. Also, if feasible, set the damaged property aside and in the best possible order for examination.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1018,
          right_text:
            '(5) At our request, give us complete inventories of the damaged and undamaged property. Include quantities, costs, values and amount of loss claimed.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1019,
          right_text:
            '(6) As often as may be reasonably required, permit us to inspect the property proving the loss or damage and examine your books and records.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1020,
          right_text:
            'Also permit us to take samples of damaged and undamaged property for inspection, testing and analysis, and permit us to make copies from your books and records.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1021,
          right_text:
            '(7) Send us a signed, sworn proof of loss containing the information we request to investigate the claim. You must do this within 60 days after our request. We will supply you with the necessary forms.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1023,
          right_text:
            '(9) You will not, except at your own cost, voluntarily make a payment, assume any obligation, or incur any expense without our consent except as respects to protecting property from further damage.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1024,
          right_text:
            '(10) If you intend to continue your business, you must resume all or part of your "operations" as quickly as possible.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1025,
          right_text:
            "b. We may examine any insured under oath, while not in the presence of any other insured and at such times as may be reasonably required, about any matter relating to this insurance or the claim, including an insured's books and records. In the event of an examination, an insured's answers must be signed.",
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1026,
          right_text: '4. Loss Payment',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1027,
          right_text:
            'a. In the event of loss or damage covered by this policy, at our option, we will either:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1028,
          right_text: '(1) Pay the value of lost or damaged property;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1029,
          right_text:
            '(2) Pay the cost of repairing or replacing the lost or damaged property, subject to Paragraph b. below;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1030,
          right_text:
            '(3) Take all or any part of the property at an agreed or appraised value; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1031,
          right_text:
            '(4) Repair, rebuild or replace the property with other property of like kind and quality, subject to Paragraph b. below.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1032,
          right_text: 'b. Party Walls',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1033,
          right_text:
            'A party wall is a wall that separates and is common to adjoining buildings that are owned by different parties. In settling covered losses involving a party wall, we will pay a proportion of the loss to the party wall based on your interest in the wall in proportion to the interest of the owner of the adjoining building. However, if you elect to repair or replace your building and the owner of the adjoining building elects not to repair or replace that building, we will pay you the full value of the loss to the party wall, subject to all applicable policy provisions including Limits Of Insurance, the Valuation and Coinsurance Additional Condition and all other provisions of this Loss Payment Condition. Our payment under the provisions of this paragraph does not alter any right of subrogation we may have against any entity, including the owner or insurer of the adjoining building, and does not alter the terms of the Transfer Of Rights Of Recovery Against Others To Us Condition in this policy.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1034,
          right_text: 'c. Ordinance Or Law',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1035,
          right_text:
            'The following loss payment provisions, Paragraphs H.4.c.(1) through H.4.c.(3), are subject to the apportionment procedures set forth in Paragraph A.3.e.(2)(c) of this coverage form.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1036,
          right_text:
            '(1) For a loss in value of an undamaged portion of a building to which Coverage A applies, the loss payment for that building, including damaged and undamaged portions, will be determined as follows:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1037,
          right_text:
            '(a) If Replacement Cost Coverage applies and the property is being repaired or replaced, on the same or another location, we will not pay more than the lesser of:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1038,
          right_text:
            '(i) The cost to repair, rebuild or reconstruct the building, but not for more than the amount it would cost to restore the building on the same location and to the same height, floor area, style and comparable quality of the original property insured; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1039,
          right_text:
            '(ii) The Limit Of Insurance shown in the Declarations or Scheduled Location endorsement as applicable to the covered building.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1040,
          right_text:
            '(b) If Replacement Cost Coverage applies and the property is not repaired or replaced, or if Replacement Cost Coverage does not apply, we will not pay more than the lesser of:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1041,
          right_text:
            '(i) The actual cash value of the building at the time of loss; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1042,
          right_text:
            '(ii) The Limit Of Insurance shown in the Declarations or Scheduled Location endorsement as applicable to the covered building.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1043,
          right_text:
            '(2) Loss payment under Coverage B - Demolition Cost Coverage will be determined as follows:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1044,
          right_text: 'We will not pay more than the lesser of the following:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1045,
          right_text:
            '(a) The amount you actually spend to demolish and clear the site of the "covered location"; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1046,
          right_text: '(b) The applicable Limit of Insurance for Coverage B.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1047,
          right_text:
            '(3) Loss payment under Coverage C - Increased Cost Of Construction Coverage will be determined as follows:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1048,
          right_text: '(a) We will not pay under Coverage C:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1049,
          right_text:
            '(i) Until the property is actually repaired or replaced, at the same or another location; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1050,
          right_text:
            '(ii) Unless the repairs or replacement is made as soon as reasonably possible after the loss or damage, not to exceed two years. We may extend this period in writing during the two years.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1051,
          right_text:
            '(b) If the building is repaired or replaced at the same location, or if you elect to rebuild at another location, the most we will pay under Coverage C is the lesser of:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1052,
          right_text:
            '(i) The increased cost of construction at the same location; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1053,
          right_text: '(ii) The applicable Limit of Insurance for Coverage C.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1054,
          right_text:
            '(c) If the ordinance or law requires relocation to another location, the most we will pay under Coverage C is the lesser of:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1055,
          right_text:
            '(i) The increased cost of construction at the new location; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1056,
          right_text: '(ii) The applicable Limit of Insurance for Coverage C.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1057,
          right_text:
            'd. We will give notice of our intentions within 30 days after we receive the sworn proof of loss.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1058,
          right_text:
            'e. We will not pay you more than your financial interest in the Covered Property.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1059,
          right_text:
            "f. We may adjust losses with the owners of lost or damaged property if other than you. If we pay the owner, such payments will satisfy your claims against us for the owners' property. We will not pay the owner more than their financial interest in the Covered Property.",
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1060,
          right_text:
            'g. We may elect to defend you against suits arising from claims of owners of property. We will do this at our expense.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1061,
          right_text:
            'h. We will pay for covered loss or damage within 30 days after we receive the sworn proof of loss, if you have complied with all of the terms of this policy and:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1062,
          right_text:
            '(1) We have reached agreement with you on the amount of loss; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1063,
          right_text: '(2) An appraisal award has been made.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1064,
          right_text: '5. Recovered Property',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1065,
          right_text:
            'If either you or we recover any property after loss settlement, that party must give the other prompt notice. At your option, the property will be returned to you. You then must return to us the amount we paid you for the property. We will pay recovery expenses and the expenses to repair the recovered property, subject to the Limit of Insurance.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1066,
          right_text: '6. Vacancy And Unoccupancy',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1067,
          right_text: 'a. Description Of Terms',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1068,
          right_text:
            '(1) As used in this Vacancy And Unoccupancy Condition, the terms vacancy and unoccupancy have the meanings set forth in Paragraphs (a) and (b) below:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1069,
          right_text:
            '(a) When this policy is issued to a tenant, and with respect to that tenant\'s interest in Covered Property, building means the "dwelling", unit or suite rented or leased to the tenant. Such building is vacant when it does not contain enough:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1070,
          right_text:
            '(i) Business Personal Property to conduct customary operations; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1071,
          right_text: '(ii) Household Personal Property for customary use.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1072,
          right_text:
            '(b) When this policy is issued to the owner or general lessee of a building, building means the entire building. Such building is vacant unless at least 31% of its total square footage is:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1073,
          right_text:
            '(i) Rented to a lessee or sublessee and used by the lessee or sublessee to conduct its customary operations; and/or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1074,
          right_text:
            '(ii) Used by the building owner to conduct customary operations.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1075,
          right_text:
            '(2) A "dwelling" is unoccupied when you, any "family member" or tenant has not been present at the "dwelling" for a period of 60 consecutive days or more. A building or structure, other than a "dwelling", is unoccupied when it has not been used for its customary operations for a period of 60 consecutive days or more.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1076,
          right_text:
            '(3) Buildings under construction or renovation are not considered vacant or unoccupied.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1077,
          right_text: 'b. Vacancy And Unoccupancy Provision',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1078,
          right_text:
            'If the building where loss or damage occurs has been vacant or unoccupied before that loss or damage occurs:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1079,
          right_text:
            '(1) We will not pay for any loss or damage caused by any of the following even if they are Covered Causes of Loss:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1080,
          right_text: '(a) Vandalism;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1081,
          right_text:
            '(b) Sprinkler leakage, unless you have protected the system against freezing;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1082,
          right_text: '(c) Building glass breakage;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1083,
          right_text: '(d) Water damage;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1084,
          right_text: '(e) Theft; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1085,
          right_text: '(f) Attempted theft.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1086,
          right_text:
            '(2) With respect to Covered Causes of Loss other than those listed in Paragraphs b.(1)(a) through b.(1)(f) above, we will reduce the amount we would otherwise pay for the loss or damage by 15%.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1087,
          right_text: '7. Valuation',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1088,
          right_text:
            'We will determine the value of Covered Property in the event of a loss or damage as follows:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1089,
          right_text:
            'a. At replacement cost as of the time of loss or damage, except as otherwise provided in this Valuation Condition. Replacement cost is the cost to replace Covered Property at the time of loss or damage without deduction for depreciation.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1090,
          right_text: '(1) Replacement cost does not apply to:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1091,
          right_text:
            '(a) Household Personal Property unless replacement cost is selected in the Declarations or Scheduled Location endorsement;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1092,
          right_text: '(b) Manuscripts; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1093,
          right_text:
            '(c) "Mobile equipment", unless otherwise indicated in the Declarations.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1094,
          right_text: 'Instead Actual Cash Value applies.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1095,
          right_text:
            '(2) You may make a claim for loss or damage covered by this insurance on an actual cash value basis instead of on a replacement cost basis. In the event you elect to have loss or damage settled on an actual cash value basis, you may still make a claim for the additional coverage replacement cost provides if you notify us of your intent to do so within 180 days after the loss or damage.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1096,
          right_text:
            '(3) We will not pay on a replacement cost basis for any loss or damage:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1097,
          right_text:
            '(a) Until the lost or damaged property is actually repaired or replaced; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1098,
          right_text:
            '(b) Unless the repairs or replacement is made as soon as reasonably possible after the loss or damage.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1099,
          right_text:
            "Instead we will pay on an actual cash value basis. With respect to tenant's improvements and betterments, the following also applies:",
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1100,
          right_text:
            "(c) If the conditions in Paragraphs 7.a.(3)(a) and 7.a.(3)(b) are not met, the value of tenant's improvements and betterments will be determined as a proportion of your original cost, as set forth in the Valuation Condition Paragraph 7.d.",
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1101,
          right_text:
            '(4) We will not pay more for loss or damage on a replacement cost basis than the least of Paragraph (a), (b) or (c) below:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1102,
          right_text:
            '(a) The Limit of Insurance applicable to the lost or damaged property with other property;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1103,
          right_text:
            '(b) The cost to replace, on the same "covered location", the lost or damaged property with other property:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1104,
          right_text: '(i) Of comparable material and quality; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1105,
          right_text: '(ii) Used for the same purpose; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1106,
          right_text:
            '(c) The amount you actually spend that is necessary to repair or replace the lost or damaged property.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1107,
          right_text:
            'If a building is rebuilt at a different "covered location", the cost is limited to the cost which would have been incurred had the building been built at the original "covered location".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1108,
          right_text:
            'b. "Stock" you have sold but not delivered at the selling price less discounts and expenses you otherwise would have had.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1109,
          right_text:
            'c. Glass at the cost of replacement with safety glazing material if required by law.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1110,
          right_text: "d. Tenant's improvements and betterments at:",
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1111,
          right_text:
            '(1) Replacement cost of the lost or damaged property if it is actually repaired or replaced as soon as reasonably possible.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1112,
          right_text:
            '(2) A proportion of your original cost if you do not make repairs as soon as reasonably possible. We will determine the proportionate value as follows:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1113,
          right_text:
            '(a) Multiply the original cost by the number of days from the loss or damage to the expiration of the lease; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1114,
          right_text:
            '(b) Divide the amount determined in Paragraph (a) above by the number of days from the installation of improvements to the expiration of the lease.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1115,
          right_text:
            'If your lease contains a renewal option, the expiration of the renewal option period will replace the expiration of the lease in this procedure.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1116,
          right_text: '(3) Nothing if others pay for repairs or replacement.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1117,
          right_text: 'e. Pair, sets or parts:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1118,
          right_text:
            '(1) Pair or sets. In case of loss to any part of a pair or set we may:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1119,
          right_text:
            '(a) Repair or replace any part to restore the pair or set to its value before the loss; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1120,
          right_text:
            '(b) Pay the difference between the value of the pair or set before and after the loss.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1121,
          right_text:
            '(2) Parts. In case of loss to any part of Covered Property consisting of several parts when complete, we will only pay for the value of the lost or damaged part.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1122,
          right_text:
            'f. "Valuable papers and records" will be valued as follows:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1123,
          right_text:
            '(1) The value of each item of property that is specifically declared and described in the Declarations is the applicable Limit of Insurance for that item.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1124,
          right_text:
            '(2) "Valuable papers and records" not declared and described in the Declarations, will be valued on an actual cash value basis at the time of loss.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1125,
          right_text: '8. Special Loss Conditions',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1126,
          right_text:
            'The following provision applies only to Coverage A.7. Business Income And Extra Expense/Dwelling Loss Of Use:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1127,
          right_text: 'a. Loss Determination',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1128,
          right_text:
            '(1) The amount of Business Income loss will be determined based on:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1129,
          right_text:
            '(a) The Net Income of the business before the direct physical loss or damage occurred;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1130,
          right_text:
            '(b) The likely Net Income of the business if no loss or damage occurred, but not including any Net Income that would likely have been earned as a result of an increase in the volume of business due to favorable business conditions caused by the impact of the Covered Cause of Loss on customers or on other businesses;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1131,
          right_text:
            '(c) The operating expenses, including "payroll" expenses, necessary to resume "operations" with the same quality of service that existed just before the direct physical loss or damage; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1132,
          right_text: '(d) Other relevant sources of information, including:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1133,
          right_text: '(i) Your financial records and accounting procedures;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1134,
          right_text: '(ii) Bills, invoices and other vouchers; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1135,
          right_text: '(iii) Deeds, liens or contracts.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1136,
          right_text:
            '(2) The amount of Extra Expense will be determined based on:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1137,
          right_text:
            '(a) Necessary expenses that exceed the normal operating expenses that would have been incurred by "operations" during the "period of restoration" if no direct physical loss or damage had occurred. We will deduct from the total of such expenses:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1138,
          right_text:
            '(i) The salvage value that remains of any property bought for temporary use during the "period of restoration", once "operations" are resumed; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1140,
          right_text:
            '(b) Necessary expenses that reduce the Business Income loss that otherwise would have been incurred.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1141,
          right_text: '(3) Resumption Of Operations',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1142,
          right_text: 'We will reduce the amount of your:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1143,
          right_text:
            '(a) Business Income loss, other than Extra Expense, to the extent you can resume your "operations", in whole or in part, by using damaged or undamaged property (including merchandise or "stock") at your "covered location" or elsewhere.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1144,
          right_text:
            '(b) Extra Expense loss to the extent you can return "operations" to normal and discontinue such Extra Expense.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1145,
          right_text:
            '(c) Business Income loss from "dependent properties", other than Extra Expense to the extent you can resume "operations" in whole or in part by using any other available:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1146,
          right_text: '(i) Source of materials; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1147,
          right_text: '(ii) Outlet for your products.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1148,
          right_text:
            '(4) If you do not resume "operations", or do not resume "operations" as quickly as possible, we will pay based on the length of time it would have taken to resume "operations" as quickly as possible.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1149,
          right_text: 'b. Loss Payment',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1150,
          right_text:
            'We will pay for covered loss within 30 days after we receive the sworn proof of loss, if you have complied with all of the terms of this coverage and:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1151,
          right_text:
            '(1) We have reached agreement with you on the amount of loss; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1152,
          right_text: '(2) An appraisal award has been made.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1153,
          right_text: 'I. Additional Conditions',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1154,
          right_text: '1. Mortgageholders',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1155,
          right_text: 'The following condition applies:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1156,
          right_text: 'a. The term mortgageholder includes trustee.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1157,
          right_text:
            'b. We will pay for covered loss of or damage to buildings or structures to each mortgageholder shown in the Declarations in their order of precedence, as interests may appear.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1158,
          right_text:
            'c. The mortgageholder has the right to receive loss payment even if the mortgageholder has started foreclosure or similar action on the building or structure.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1159,
          right_text:
            'd. If we deny your claim because of your acts or because you have failed to comply with the terms of this policy, the mortgageholder will still have the right to receive loss payment if the mortgageholder:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1160,
          right_text:
            '(1) Pays any premium due under this policy at our request if you have failed to do so;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1161,
          right_text:
            '(2) Submits a signed sworn proof of loss within 60 days after receiving notice from us of your failure to do so; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1162,
          right_text:
            '(3) Has notified us of any change in ownership, occupancy or substantial change in risk known to the mortgageholder.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1163,
          right_text:
            'All of the terms of this policy will then apply directly to the mortgageholder.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1164,
          right_text:
            'e. If we pay the mortgageholder for any loss or damage and deny payment to you because of your acts or because you have failed to comply with the terms of this policy:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1165,
          right_text:
            "(1) The mortgageholder's rights under the mortgage will be transferred to us to the extent of the amount we pay; and",
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1166,
          right_text:
            "(2) The mortgageholder's right to recover the full amount of the mortgageholder's claim will not be impaired.",
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1167,
          right_text:
            'At our option, we may pay to the mortgageholder the whole principal on the mortgage plus any accrued interest. In this event, your mortgage and note will be transferred to us and you will pay your remaining mortgage debt to us.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1168,
          right_text:
            'f. If we cancel this policy, we will give written notice to the mortgageholder at least:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1169,
          right_text:
            '(1) 10 days before the effective date of cancellation if we cancel for your nonpayment of premium; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1170,
          right_text:
            '(2) 30 days before the effective date of cancellation if we cancel for any other reason.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1171,
          right_text:
            'g. If we elect not to renew this policy, we will give written notice to the mortgageholder at least 10 days before the expiration date of this policy.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1173,
          right_text:
            'The following condition applies only to Coverage A.7. Business Income And Extra Expense/Dwelling Loss Of Use when a coinsurance percentage applies:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1174,
          right_text:
            'a. If a Coinsurance percentage is shown in the Scheduled Location endorsement, the following condition applies in addition to the Common Policy Conditions and the Agricultural Capital Assets (Output Policy) Coverage Form Conditions.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1175,
          right_text:
            'b. We will not pay the full amount of any Business Income loss if the Limit of Insurance for Business Income is less than:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1176,
          right_text:
            '(1) The applicable Coinsurance percentage for Business Income; times',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1177,
          right_text: '(2) The sum of:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1178,
          right_text:
            '(a) The Net Income (Net Profit or Loss before income taxes); and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1179,
          right_text:
            '(b) All operating expenses, including "payroll" expenses;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1180,
          right_text:
            'that would have been earned or incurred (had no loss occurred) by your "operations" at your "covered location" for the 12 months following the inception, or last previous anniversary date of this policy (whichever is later).',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1181,
          right_text:
            'Instead, we will determine the most we will pay using the following steps:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1182,
          right_text:
            'Step 1. Multiply the Net Income and operating expense for the 12 months following the inception, or last previous anniversary date, of this policy by the Coinsurance percentage;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1183,
          right_text:
            'Step 2. Divide the Limit of Insurance for your "covered location" by the figure determined in Step 1.; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1184,
          right_text:
            'Step 3. Multiply the total amount of loss by the figure determined in Step 2.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1185,
          right_text:
            'c. We will pay the amount determined in Step 3. above or the Limit of Insurance, whichever is less. For the remainder, you will either have to rely on other insurance or absorb the loss yourself.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1186,
          right_text:
            'd. In determining operating expenses for the purpose of applying the Coinsurance condition, the following expenses, if applicable, shall be deducted from the total of all operating expenses:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1187,
          right_text: '(1) Prepaid freight - outgoing;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1188,
          right_text: '(2) Returns and allowances;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1189,
          right_text: '(3) Discounts;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1190,
          right_text: '(4) Bad debts;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1191,
          right_text: '(5) Collection expenses;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1192,
          right_text:
            '(6) Cost of raw "stock" and factory supplies consumed (including transportation charges);',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1193,
          right_text:
            '(7) Cost of merchandise sold (including transportation charges);',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1194,
          right_text:
            '(8) Cost of other supplies consumed (including transportation charges);',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1195,
          right_text:
            '(9) Cost of services purchased from outsiders (not "employees") to resell, that do not continue under contract;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1196,
          right_text:
            '(10) Power, heat and refrigeration expenses that do not continue under contract (if Endorsement AG 15 06 is attached);',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1197,
          right_text:
            '(11) All ordinary "payroll" expenses or the amount of "payroll" expense excluded (if Endorsement AG 15 05 is attached); and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1198,
          right_text:
            '(12) Special deductions for mining properties (royalties unless specifically included in coverage; actual depletion commonly known as unit or cost depletion - not percentage depletion; welfare and retirement fund charges based on tonnage; hired trucks).',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1199,
          right_text: 'EXAMPLE NO. 1 (UNDERINSURANCE):',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1201,
          right_text:
            'The Net Income and operating expenses for the 12 months following the inception, or last previous anniversary date, of this policy at your "covered location" would have been',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1202,
          right_text: '$400,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1203,
          right_text: 'The Coinsurance percentage is',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1204,
          right_text: '50%',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1205,
          right_text: 'The Limit of Insurance is',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1206,
          right_text: '$150,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1207,
          right_text: 'The amount of loss is',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1208,
          right_text: '$80,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1209,
          right_text: 'Step 1.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1210,
          right_text: '$400,000 x 50% = $200,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1211,
          right_text:
            '(the minimum amount of insurance to meet your Coinsurance requirements)',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1212,
          right_text: 'Step 2.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1213,
          right_text: '$150,000 $200,000 = .75',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1214,
          right_text: 'Step 3.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1215,
          right_text: '$80,000 x .75 = $60,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1216,
          right_text:
            'We will pay no more than $60,000. The remaining $20,000 is not covered.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1217,
          right_text: 'EXAMPLE NO. 2 (ADEQUATE INSURANCE):',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1219,
          right_text:
            'The Net Income and operating expenses for the 12 months following the inception, or last previous anniversary date, of this policy at your "covered location" would have been',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1220,
          right_text: '$400,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1221,
          right_text: 'The Coinsurance percentage is',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1222,
          right_text: '50%',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1224,
          right_text: '$200,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1225,
          right_text: 'The amount of loss is',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1226,
          right_text: '$80,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1227,
          right_text:
            'The minimum amount of insurance to meet your Coinsurance requirement is $200,000 ($400,000 x 50%). Therefore, the Limit of Insurance in this Example is adequate and no penalty applies. We will pay no more than $80,000 (amount of loss).',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1228,
          right_text:
            'e. This condition does not apply to the Extra Expense Coverage.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1229,
          right_text: '3. When Builders Risk Coverage Ceases',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1230,
          right_text:
            '"Builders risk" coverage, as described in Paragraph A.1.a.(9) of Coverage, will end when one of the following first occurs:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1231,
          right_text: 'a. This policy expires or is cancelled;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1232,
          right_text: 'b. The property is accepted by the purchaser;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1233,
          right_text: 'c. Your interest in the property ceases;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1234,
          right_text:
            'd. You abandon the construction without intention to complete it; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1235,
          right_text: 'e. Unless we specify otherwise in writing:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1236,
          right_text: '(1) 90 days after construction is complete; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1237,
          right_text: '(2) 60 days after the "builders risk" building is:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1238,
          right_text: '(a) Occupied in whole or in part; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1239,
          right_text: '(b) Put to its intended use.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1240,
          right_text:
            'J. Agricultural Capital Assets (Output Policy) Coverage Form Conditions',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1241,
          right_text: 'The following conditions apply:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1243,
          right_text:
            'This policy is void in any case of fraud by you as it relates to this coverage form at any time. It is also void if you or any other insured, at any time, intentionally conceals or misrepresents a material fact concerning:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1245,
          right_text: 'b. The Covered Property;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1246,
          right_text: 'c. Your interest in the Covered Property; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1247,
          right_text: 'd. A claim under this policy.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1248,
          right_text: '2. Control Of Property',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1249,
          right_text:
            'Any act or neglect of any person other than you beyond your direction or control will not affect this insurance.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1250,
          right_text:
            'The breach of any condition of this policy at any one or more locations will not affect coverage at any location where, at the time of loss or damage, the breach of condition does not exist.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1251,
          right_text: '3. Insurance Under Two Or More Coverages',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1252,
          right_text:
            "If two or more of this policy's coverages apply to the same loss or damage, we will not pay more than the actual amount of the loss or damage.",
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1253,
          right_text: '4. Legal Action Against Us',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1254,
          right_text:
            'No one may bring a legal action against us under this policy unless:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1255,
          right_text:
            'a. There has been full compliance with all of the terms of this policy; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1256,
          right_text:
            'b. The action is brought within two years after the date on which the direct physical loss or damage occurred.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1257,
          right_text: '5. Liberalization',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1258,
          right_text:
            'If we adopt any revision that would broaden the coverage under this policy without additional premium within 180 days prior to or during the policy period, the broadened coverage will immediately apply to this policy.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1259,
          right_text: '6. No Benefit To Bailee',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1260,
          right_text:
            'No person or organization, other than an insured, having custody of Covered Property will benefit from this insurance.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1261,
          right_text: '7. Other Insurance',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1262,
          right_text:
            'a. You may have other insurance subject to the same plan, terms, conditions and provisions as the insurance under this policy. If you do, we will pay our share of the covered loss or damage. Our share is the proportion that the applicable Limit of Insurance under this policy bears to the Limits of Insurance of all insurance covering on the same basis.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1263,
          right_text:
            'b. If there is other insurance covering the same loss or damage, other than that described in Paragraph a. above, we will pay only for the amount of covered loss or damage in excess of the amount due from that other insurance, whether you can collect on it or not. But we will not pay more than the applicable Limit of Insurance.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1264,
          right_text:
            'c. In the settlement of loss or damage to property covered under Paragraph A.1.b.(14)(b) that you have borrowed or rented, Paragraph b. of this condition will not apply.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1265,
          right_text:
            'd. If loss or damage is also covered by a service agreement, any amounts payable for such loss or damage under this policy will be excess over any amounts payable under such agreement. Service agreement means a service plan, property restoration plan, home warranty or other similar service warranty agreement, even if it is characterized as insurance.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1266,
          right_text: '8. Policy Period, Coverage Territory',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1267,
          right_text: 'Under this policy:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1268,
          right_text: 'a. We cover loss or damage commencing:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1269,
          right_text:
            '(1) During the policy period shown in the Declarations; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1270,
          right_text: '(2) Within the Coverage Territory.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1271,
          right_text: 'b. The Coverage Territory is:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1272,
          right_text:
            '(1) The United States of America (including its territories and possessions);',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1273,
          right_text: '(2) Puerto Rico; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1274,
          right_text: '(3) Canada;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1275,
          right_text:
            'except as specifically provided elsewhere in this policy.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1277,
          right_text:
            'If any person or organization to or for whom we make payment under this policy has rights to recover damages from another, those rights are transferred to us to the extent of our payment. That person or organization must do everything necessary to secure our rights and must do nothing after loss to impair them. But you may waive your rights against another party in writing:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1278,
          right_text:
            'a. Prior to a loss to your Covered Property or Covered Income.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1279,
          right_text:
            'b. After a loss to your Covered Property or Covered Income only if, at time of loss, that party is one of the following:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1280,
          right_text: '(1) Someone insured by this insurance;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1281,
          right_text: '(2) A business firm:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1282,
          right_text: '(a) Owned or controlled by you; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1283,
          right_text: '(b) That owns or controls you; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1284,
          right_text: '(3) Your tenant.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1285,
          right_text: 'This will not restrict your insurance.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1286,
          right_text: 'K. Optional Coverages',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1287,
          right_text:
            'If shown as applicable in the Declarations, the following Optional Coverages apply separately to each item:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1288,
          right_text: '1. Actual Cash Value',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1289,
          right_text:
            'Actual Cash Value replaces Replacement Cost in the Valuation Loss Condition of this policy.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1290,
          right_text:
            '2. The following Optional Coverages apply only to Coverage A.7., Business Income And Extra Expense/Dwelling Loss Of Use.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1291,
          right_text:
            'If shown in the Declarations, the following Optional Coverages apply separately to each item:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1292,
          right_text: 'a. Maximum Period Of Indemnity',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1293,
          right_text:
            '(1) The Additional Condition, Coinsurance, does not apply to this coverage at your "covered location" to which this Optional Coverage applies.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1294,
          right_text:
            '(2) The most we will pay for the total of Business Income loss and Extra Expense is the lesser of:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1295,
          right_text:
            '(a) The amount of loss sustained and expenses incurred during the 120 days immediately following the beginning of the "period of restoration"; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1296,
          right_text:
            '(b) The Limit Of Insurance shown in the Declarations or Scheduled Location endorsement.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1297,
          right_text: 'b. Monthly Limit Of Indemnity',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1298,
          right_text:
            '(1) The Additional Condition, Coinsurance, does not apply to this coverage at your "covered location" to which this Optional Coverage applies.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1299,
          right_text:
            '(2) The most we will pay for loss of Business Income in each period of 30 consecutive days after the beginning of the "period of restoration" is:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1300,
          right_text: '(a) The Limit of Insurance, multiplied by',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1301,
          right_text:
            '(b) The fraction shown in the Declarations for the Optional Coverage.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1304,
          right_text: 'The Limit of Insurance is',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1305,
          right_text: '$120,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1306,
          right_text:
            'The fraction shown in the Declarations for this Optional Coverage is:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1307,
          right_text: '1/4',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1308,
          right_text:
            'The most we will pay for loss in each period of 30 consecutive days is',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1309,
          right_text: '$120,000 x 1/4 = $30,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1310,
          right_text: 'If, in this example, the actual amount of loss is',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1312,
          right_text: '1 - 30',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1313,
          right_text: '$40,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1314,
          right_text: 'Days',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1315,
          right_text: '31 - 60',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1316,
          right_text: '$20,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1317,
          right_text: 'Days',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1318,
          right_text: '61 - 90',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1319,
          right_text: '$30,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1320,
          right_text: '$90,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1321,
          right_text: 'We will pay',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1322,
          right_text: 'Days',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1323,
          right_text: '1 - 30',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1324,
          right_text: '$30,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1325,
          right_text: 'Days',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1326,
          right_text: '31 - 60',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1327,
          right_text: '$20,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1328,
          right_text: 'Days',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1329,
          right_text: '61 - 90',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1330,
          right_text: '$30,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1331,
          right_text: '$80,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1332,
          right_text: 'The remaining $10,000 is not covered.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1333,
          right_text: 'c. Agreed Value',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1334,
          right_text: '(1) To activate this Optional Coverage:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1335,
          right_text:
            '(a) A Business Income Report/Work- sheet must be submitted to us and must show financial data for your "operations":',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1336,
          right_text:
            '(i) During the 12 months prior to the date of the Worksheet; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1337,
          right_text:
            '(ii) Estimated for the 12 months immediately following the inception of this Optional Coverage.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1338,
          right_text:
            '(b) The Declarations or the Scheduled Location endorsement must indicate that the Business Income Agreed Value Optional Coverage applies, and an Agreed Value must be shown in the Declarations or Scheduled Location endorsement. The Agreed Value should be at least equal to:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1339,
          right_text:
            '(i) The Coinsurance percentage shown in the Declarations or Scheduled Location endorsement; multiplied by',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1340,
          right_text:
            '(ii) The amount of Net Income and operating expenses for the following 12 months you report on the Worksheet.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1341,
          right_text:
            '(2) The Additional Condition, Coinsurance, is suspended until:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1342,
          right_text:
            '(a) 12 months after the effective date of this Optional Coverage; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1343,
          right_text: '(b) The expiration date of this policy;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1344,
          right_text: 'whichever occurs first.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1345,
          right_text:
            '(3) We will reinstate the Additional Condition, Coinsurance, automatically if you do not submit a new Worksheet and Agreed Value:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1346,
          right_text:
            '(a) Within 12 months of the effective date of this Optional Coverage; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1347,
          right_text:
            '(b) When you request a change in your Business Income Limit of Insurance.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1348,
          right_text:
            '(4) If the Business Income Limit of Insurance is less than the Agreed Value, we will not pay more of any loss than the amount of loss multiplied by:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1349,
          right_text: '(a) The Business Income Limit of Insurance; divided by',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1350,
          right_text: '(b) The Agreed Value.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1351,
          right_text: 'EXAMPLE:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1352,
          right_text: 'When:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1353,
          right_text: 'The Limit of Insurance is',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1354,
          right_text: '$100,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1355,
          right_text: 'The Agreed Value is',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1356,
          right_text: '$200,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1357,
          right_text: 'The amount of the loss is',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1358,
          right_text: '$ 80,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1359,
          right_text: 'Step 1.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1360,
          right_text: '$100,000 $200,000 = .50',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1361,
          right_text: 'Step 2.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1362,
          right_text: '.50 x $80,000 = $40,000',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1363,
          right_text:
            'We will pay $40,000. The remaining $40,000 is not covered.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1365,
          right_text: '1. "Accounts receivable" means:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1366,
          right_text:
            'a. All amounts due from your customers that you are unable to collect;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1367,
          right_text:
            'b. Interest charges on any loan required to offset amounts you are unable to collect pending our payment of these amounts;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1368,
          right_text:
            'c. Collection expenses in excess of your normal collection expenses that are made necessary by the loss; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1369,
          right_text:
            'd. Other reasonable expenses that you incur to reestablish your records of "accounts receivable".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1370,
          right_text: '2. "Builders risk" means:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1371,
          right_text:
            'Building and structures while being constructed, altered or repaired at a "covered location" including:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1372,
          right_text:
            'a. The following property provided such property is intended to be permanently located in or on a covered building:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1373,
          right_text:
            '(1) Your building materials and supplies used for construction;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1374,
          right_text: '(2) Fixtures and machinery; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1375,
          right_text: '(3) Equipment used to service the building;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1376,
          right_text:
            'b. Foundations of a building or structure while in the course of construction;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1377,
          right_text:
            'c. Temporary structures built or assembled on site, including cribbing, scaffolding and construction forms; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1378,
          right_text: 'd. Building materials and supplies that are:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1379,
          right_text: '(1) Owned by others;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1380,
          right_text: '(2) In your care, custody or control; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1381,
          right_text:
            '(3) Located in or on a covered building or within 1,000 feet of a covered building.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1382,
          right_text: '3. "Computer" means:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1383,
          right_text:
            'a. Your programmable electronic equipment that is used to receive, process, store, retrieve or send data. It includes their component parts and air conditioning, fire suppression equipment and electrical equipment used exclusively in your "computer" operations; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1384,
          right_text:
            'b. Associated peripheral equipment that provides communication including input and output functions such as printing or auxiliary functions such as data transmission.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1385,
          right_text: 'It does not include data and media.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1386,
          right_text:
            '4. "Counterfeit money" means an imitation of money that is intended to deceive and to be taken as genuine.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1387,
          right_text:
            '5. "Covered location" means any premises or location that you own, lease or operate.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1388,
          right_text:
            '6. "Dependent property" means property, operated by others whom you rely on to:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1389,
          right_text:
            'a. Deliver materials or services to you, or to others for your account (Contributing Locations). But any property which delivers any of the following services is not a Contributing Location with respect to such services:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1390,
          right_text: '(1) Water supply services;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1391,
          right_text: '(2) Power supply services; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1392,
          right_text:
            '(3) Communication supply services, including services relating to Internet access or access to any electronic network;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1393,
          right_text:
            'b. Accept your products or services (Recipient Locations);',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1394,
          right_text:
            'c. Manufacture products for delivery to your customers under contract of sale (Manufacturing Locations); or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1395,
          right_text:
            'd. Attract customers to your business (Leader Locations).',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1396,
          right_text:
            '7. "Dwelling" means any building used principally for family residential purposes, and includes mobile homes and modular and prefabricated homes.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1397,
          right_text:
            '"Dwelling" does not include any building used for the following:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1398,
          right_text:
            'a. Storage of farm produce in connection with your "operations";',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1399,
          right_text: 'b. "Livestock" "operations"; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1400,
          right_text: 'c. "Poultry" "operations".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1401,
          right_text:
            '8. "Electronic data" means information, facts or "computer" programs stored as or on, created or used on, or transmitted to or from "computer" software (including systems and applications software), on hard or floppy disks, CD-ROMs, tapes, drives, cells, data processing devices or any other repositories of "computer" software which are used with electronically controlled equipment. The term "computer" programs, referred to in the foregoing description of "electronic data", means a set of related electronic instructions which direct the operations and functions of a "computer" or device connected to it, which enable the "computer" or device to receive, process, store, retrieve or send data.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1403,
          right_text: 'a. "Employee" means:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1404,
          right_text: '(1) Any natural person:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1405,
          right_text:
            '(a) While in your service and for the first 30 days immediately after termination of service, unless such termination is due to theft or any other dishonest act committed by the "employee";',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1406,
          right_text:
            '(b) Who you compensate directly by salary, wages or commissions; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1407,
          right_text:
            '(c) Who you have the right to direct and control while performing services for you.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1408,
          right_text:
            '(2) Any natural person who is furnished temporarily to you:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1409,
          right_text:
            '(a) To substitute for a permanent "employee" as defined in Paragraph a.(1), who is on leave; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1410,
          right_text: '(b) To meet seasonal or short-term workload conditions;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1411,
          right_text:
            'while that person is subject to your direction and control and performing services for you excluding, however, any such person while having care and custody of property outside your "covered location".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1412,
          right_text:
            '(3) Any natural person who is leased to you under a written agreement between you and a labor leasing firm, to perform duties related to the conduct of your business, but does not mean a temporary employee as defined in Paragraph a.(2);',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1413,
          right_text:
            '(4) Any natural person who is a former "employee", partner, "member", "manager", director or trustee retained as a consultant while performing services for you;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1414,
          right_text:
            '(5) Any natural person who is a guest student or intern pursuing studies or duties excluding, however, any such person while having care and custody of property outside your "covered location";',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1415,
          right_text:
            '(6) Any "employee" of an entity merged or consolidated with you prior to the effective date of this policy; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1416,
          right_text:
            '(7) Any of your "managers", directors or trustees while:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1417,
          right_text:
            '(a) Performing acts within the scope of the usual duties of an "employee"; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1418,
          right_text:
            '(b) Acting as a member of any committee duly elected or appointed by resolution of your board of directors or board of trustees to perform specific, as distinguished from general, directorial acts on your behalf.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1419,
          right_text:
            'b. "Employee" does not mean any agent, broker, factor, commission merchant, consignee, independent contractor or representative of the same general character not specified in Paragraph 9.a.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1420,
          right_text:
            '10. "Family member" means the following residents of your household:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1421,
          right_text: 'a. Your relatives;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1422,
          right_text:
            'b. Any other person under the age of 21 who is in the care of any person specified above;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1423,
          right_text:
            'c. A student enrolled in school full-time, as defined by the school, who was a member of your household before moving out to attend school, provided the student is under the age of:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1424,
          right_text: '(1) 24 and your relative; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1425,
          right_text:
            '(2) 21 and in your care or the care of a person specified in Paragraph a.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1426,
          right_text:
            '11. "Fine arts" means paintings, drawings, lithographs, rugs, tapestries, statuary, bronzes, porcelains, marbles, antique furniture, rare books and other bona fide items of artistic merit.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1427,
          right_text:
            '12. "Finished stock" means "stock" you have manufactured.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1428,
          right_text:
            '"Finished stock" also includes whiskey and alcoholic products being aged, unless there is a Coinsurance percentage shown for Business Income in the Declarations or Scheduled Location endorsement.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1429,
          right_text:
            '"Finished stock" does not include "stock" you have manufactured and hold for sale at any retail outlet.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1430,
          right_text:
            '13. "Fungi" means any type or form of fungus, including mold or mildew, and any mycotoxins, spores, scents or by-products produced or released by "fungi".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1431,
          right_text:
            '14. "Leased property" means property that you have leased, rented or sent out for approval.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1432,
          right_text:
            '15. "Livestock" means cattle, sheep, swine, goats, horses, mules, donkeys, bees and other insects, fish, worms, birds and any other animals except "poultry".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1433,
          right_text:
            '16. "Manager" means a person serving in a directorial capacity for a limited liability company.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1434,
          right_text:
            '17. "Market value" means the price which the property might be expected to realize prior to loss or damage if offered for sale in a fair market on the date the loss or damage occurred, the cost of reasonable restoration of the property or the replacement of the property with substantially the same property, whichever is less.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1435,
          right_text:
            '18. "Member" means an owner of a limited liability company represented by its membership interest, who also may serve as a "manager".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1436,
          right_text:
            '19. "Messenger" means you, or a relative of yours, or any of your partners or "members", or any "employee", while having care and custody of property outside covered buildings.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1438,
          right_text:
            'a. Agricultural equipment, and similar items, of a mobile nature;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1439,
          right_text:
            'b. Unlicensed vehicles which are not operated on public roadways; however, are built for public roadway use; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1440,
          right_text:
            'c. Self-propelled vehicles built and utilized for carrying equipment attached to them.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1441,
          right_text: '21. "Money" means:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1442,
          right_text:
            'a. Currency, coins and bank notes in current use and having a face value; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1443,
          right_text:
            "b. Traveler's checks, register checks and money orders held for sale to the public.",
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1444,
          right_text:
            '22. "Occurrence" is defined only for certain coverages. "Occurrence" means:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1445,
          right_text:
            'a. Under Additional Crime Coverage A.6.a., Employee Theft:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1446,
          right_text: '(1) An individual act;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1447,
          right_text:
            '(2) The combined total of all separate acts whether or not related; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1448,
          right_text: '(3) A series of acts whether or not related;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1449,
          right_text:
            'committed by an "employee" acting alone or in collusion with other persons, both during the policy period shown in the Declarations and before such policy period.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1450,
          right_text:
            'b. Under Additional Crime Coverage A.6.b., Forgery Or Alteration:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1451,
          right_text: '(1) An individual act;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1452,
          right_text:
            '(2) The combined total of all separate acts whether or not related; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1453,
          right_text: '(3) A series of acts whether or not related;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1454,
          right_text:
            'involving one or more instruments, committed by a person acting alone or in collusion with other persons, involving one or more instruments, both during the policy period shown in the Declarations and before such policy period.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1455,
          right_text:
            'c. Under Additional Crime Coverage A.6.c., Money And Securities:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1456,
          right_text: '(1) An individual act or event;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1457,
          right_text:
            '(2) The combined total of all separate acts or events whether or not related; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1458,
          right_text: '(3) A series of acts or events whether or not related;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1459,
          right_text:
            'committed by a person, acting alone or in collusion with other persons, or not committed by any person, both during the policy period shown in the Declarations and before such policy period.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1460,
          right_text: '23. "Operations" means:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1461,
          right_text:
            'a. Your business activities occurring at your "covered location"; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1462,
          right_text:
            'b. The tenantability of your "covered location" if the following coverage applies:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1463,
          right_text: '(1) Business Income including "rental value"; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1464,
          right_text: '(2) "Rental value".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1465,
          right_text:
            '24. "Other property" means tangible property other than "money" and "securities" that has intrinsic value. "Other property" does not include "computer" programs, electronic data or any property excluded under this policy.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1466,
          right_text:
            '25. "Payroll" means "payroll" expenses of all your "employees". This includes employee benefits, if directly related to "payroll"; FICA payments you pay; union dues you pay; and workers\' compensation premiums.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1467,
          right_text:
            '26. "Period of restoration" means that period of time that:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1468,
          right_text:
            'a. Begins immediately after the time of direct physical loss or damage caused by or resulting from any Covered Cause of Loss at your "covered location", scheduled location or the "dependent property"; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1469,
          right_text:
            'b. Ends on the date when the property at your "covered location", scheduled location or the "dependent property" should be repaired, rebuilt or replaced with reasonable speed and similar quality.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1470,
          right_text:
            '"Period of restoration" does not include any increased period required due to the enforcement of any ordinance or law that requires any "insured" or others to test for, monitor, clean up, remove, contain, treat, detoxify or neutralize, or in any way respond to, or assess the effects of "pollutants".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1471,
          right_text:
            'The expiration date of this policy will not cut short the "period of restoration".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1472,
          right_text:
            '27. "Pollutants" means any solid, liquid, gaseous or thermal irritant or contaminant, including smoke, vapor, soot, fumes, acids, alkalis, chemicals and waste. Waste includes materials to be recycled, reconditioned or reclaimed.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1473,
          right_text: '28. "Poultry" means fowl kept by you for use or sale.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1474,
          right_text: '29. "Rental value" means the:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1475,
          right_text:
            'a. Total anticipated rental income from tenant occupancy of your "covered location" as furnished and equipped by you;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1476,
          right_text:
            'b. Amount of all charges which are the legal obligation of the tenant(s) and which would otherwise be your obligations; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1477,
          right_text:
            'c. Fair rental value of any portion of your "covered location" which is occupied by you.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1478,
          right_text:
            '30. "Securities" means negotiable and non-negotiable instruments or contracts representing either "money" or "other property" and includes:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1479,
          right_text:
            'a. Tokens, tickets, revenue and other stamps whether or not in current use; and',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1480,
          right_text:
            'b. Evidences of debt issued in connection with credit or charge cards, which cards are not of your own issue;',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1481,
          right_text: 'but does not include "money" or lottery tickets.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1482,
          right_text:
            '31. "Specified causes of loss" means the following: Fire; lightning; explosion; windstorm or hail; smoke (including the emission or puff back of smoke, soot, fumes or vapors from a boiler, furnace or related equipment); aircraft or vehicles; riot or civil commotion; vandalism; leakage from fire extinguishing equipment; "sinkhole collapse"; volcanic action; falling objects; weight of snow, ice or sleet; "water damage".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1483,
          right_text:
            'a. "Sinkhole collapse" means the sudden sinking or collapse of land into underground empty spaces created by the action of water on limestone or dolomite. This Cause of Loss does not include:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1484,
          right_text: '(1) The cost of filling sinkholes; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1485,
          right_text:
            '(2) Sinking or collapsing of land into manmade underground cavities.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1486,
          right_text: 'b. Falling objects does not include loss or damage to:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1487,
          right_text: '(1) Personal property in the open; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1488,
          right_text:
            '(2) The interior of a building or structure, or property inside a building or structure, unless the roof or an outside wall of the building or structure is first damaged by a falling object.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1489,
          right_text:
            'c. "Water damage" means accidental discharge or leakage of water or steam as the direct result of the breaking apart or cracking of a plumbing, heating, air conditioning, ventilation or other system or appliance (other than a sump system including its related equipment and parts), that is located on a "covered location" and contains water or steam.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1490,
          right_text:
            '32. "Stock" means merchandise held in storage or for sale, raw materials and in-process or finished goods, including supplies used in their packing or shipping.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1491,
          right_text: '33. "Suspension" means:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1492,
          right_text:
            'a. The slowdown or cessation of your business activities; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1493,
          right_text:
            'b. That a part or all of a "covered location" or scheduled location is rendered untenantable, if the following coverage applies:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1494,
          right_text: '(1) Business Income including "rental value"; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1495,
          right_text: '(2) "Rental value".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1496,
          right_text:
            '34. "Tank" means a permanently installed structure specifically designed to contain liquid contents. This includes piping, pumps and other appurtenant apparatus and equipment that:',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1497,
          right_text: 'a. Are an actual part of the covered "tank";',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1498,
          right_text: 'b. Connect covered "tanks", one with another; or',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1499,
          right_text: 'c. Are within 100 feet of a covered "tank".',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1500,
          right_text:
            '35. "Theft" means the unlawful taking of "money", "securities" or "other property" to the deprivation of the insured.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1501,
          right_text:
            '36. "Valuable papers and records" means inscribed, printed or written documents, manuscripts or records, including abstracts, books, deeds, drawings, films, maps and mortgages.',
        },
        {
          left_line: null,
          left_text: '',
          right_line: 1502,
          right_text:
            'But "valuable papers and records" does not mean "money" or "securities".',
        },
      ],
      saved_at: '2021-04-02T12:40:04.324000',
      score: 0.036267000156323274,
      left_form_metadata: {
        title:
          'COMMERCIAL GENERAL LIABILITY COVERAGE FORM (OCCURRENCE VERSION)',
        displayFormNumber: 'CG 00 01 01 96',
        client_id: 'VERISK_001',
        formLobType: 'GL',
        formNumber: 'CG00010196',
        formsType: 'C',
        formStatus: 'H',
        uri: 'VERISK_001/FRM/CG00010196',
        cc_library: 'ISO',
        doc_id: '5D59AD7B-3D65-4051-8DB1-BBC769FBF006',
      },
      right_form_metadata: {
        formsType: 'C',
        cc_library: 'ISO',
        title: 'AGRICULTURAL CAPITAL ASSETS (OUTPUT POLICY) COVERAGE FORM',
        displayFormNumber: 'AG 00 01 10 10',
        uri: 'VERISK_001/FRM/AG00011010',
        doc_id: 'ef5dce7d-f362-3a0d-9f07-161939a96ee8',
        client_id: 'VERISK_001',
        formLobType: 'AG',
        formNumber: 'AG00011010',
        formStatus: 'H',
      },
    };
  }
}
