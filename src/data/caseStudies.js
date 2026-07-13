export const caseStudies = [
  {
    id: 'us-kitchen-brand-cookware',
    industry: 'Home & Kitchen',
    region: 'United States',
    title:
      'US cookware brand consolidates 4 suppliers into 1 audited factory in Zhejiang',
    summary:
      'A DTC cookware brand in California was juggling four separate suppliers for handles, bodies, lids, and packaging. We audited 9 candidate factories, negotiated consolidated production with a single Zhejiang manufacturer, and ran DPI + PSI on the first two production batches.',
    result:
      'Unit cost reduced by 18%, defect rate fell from 4.6% to 1.2%, and the brand moved from 3 vendors to 1 PO.',
    metrics: [
      { label: 'Unit cost reduction', value: '18%' },
      { label: 'Defect rate after PSI', value: '1.2%' },
      { label: 'Production batches', value: '2' },
    ],
    tags: ['Cookware', 'Stainless steel', 'DTC brand'],
  },
  {
    id: 'eu-amazon-seller-electronics',
    industry: 'Consumer Electronics',
    region: 'Germany',
    title:
      'EU Amazon seller replaces trading company with a verified Shenzhen factory',
    summary:
      'A Hamburg-based Amazon seller was buying through a Shenzhen trading company with no visibility into the actual factory. We located the real manufacturer, audited production capacity, negotiated a 12% lower FOB price, and arranged a pre-shipment inspection program for ongoing orders.',
    result:
      'Removed one margin layer, passed two PSI batches with zero critical defects, and shortened lead time by 9 days.',
    metrics: [
      { label: 'FOB price reduction', value: '12%' },
      { label: 'Lead time saved', value: '9 days' },
      { label: 'Critical defects', value: '0' },
    ],
    tags: ['Amazon FBA', 'Bluetooth', 'Trading company replacement'],
  },
  {
    id: 'au-distributor-packaging',
    industry: 'Packaging & Printing',
    region: 'Australia',
    title:
      'Australian packaging distributor on-boards two new Chinese mills in 6 weeks',
    summary:
      'An Australian distributor needed FSC-certified kraft mailers and folding cartons from China with consistent print quality. We shortlisted three FSC-certified mills, ran paper sample testing, and set up a recurring pre-shipment inspection schedule covering print registration and burst strength.',
    result:
      'Two new mills qualified in 6 weeks; on-time delivery has stayed at 98% across 9 production runs.',
    metrics: [
      { label: 'Mills qualified', value: '2' },
      { label: 'On-time delivery', value: '98%' },
      { label: 'Runs monitored', value: '9' },
    ],
    tags: ['FSC', 'Kraft mailers', 'Folding cartons'],
  },
  {
    id: 'uk-skincare-oem',
    industry: 'Beauty & Personal Care',
    region: 'United Kingdom',
    title:
      'UK skincare start-up launches 4-SKU range with one GMP-certified OEM',
    summary:
      'A UK skincare start-up needed a GMP-certified OEM for a 4-SKU launch including bottles, pumps, and box packaging. We coordinated tooling, packaging artwork, and stability sample logistics, then ran a full DUPRO and PSI on the first production batch.',
    result:
      '4-SKU launch shipped on time, passed CPSR review, and 100% of the first 5,000 units passed PSI.',
    metrics: [
      { label: 'SKUs launched', value: '4' },
      { label: 'First-batch pass rate', value: '100%' },
      { label: 'Audit references checked', value: '3' },
    ],
    tags: ['Skincare', 'OEM', 'GMP'],
  },
  {
    id: 'mena-workwear-distributor',
    industry: 'Apparel & Textiles',
    region: 'United Arab Emirates',
    title:
      'MENA workwear distributor sources certified FR garments from Jiangsu',
    summary:
      'A UAE-based distributor needed EN ISO 11612 certified flame-resistant workwear with reliable documentation. We located two audited workwear factories, verified EN and OEKO-TEX certificates directly with the issuing bodies, and ran inline inspections during the first season.',
    result:
      'First season delivered with 100% certificate compliance and 2.4% defect rate, well below the 5% allowance.',
    metrics: [
      { label: 'Certificate compliance', value: '100%' },
      { label: 'Defect rate', value: '2.4%' },
      { label: 'Factories qualified', value: '2' },
    ],
    tags: ['Workwear', 'FR certified', 'EN ISO 11612'],
  },
]
