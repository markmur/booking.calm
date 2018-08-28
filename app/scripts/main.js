const classNames = [
  'lastbooking',
  'in-high-demand-not-scarce',
  'only_x_left',
  'sr_rooms_left_wrap',
  'sr_no_desc_users',
  'js_sr_persuation_msg',
  'urgency_message_red',
  'urgency_message_x_people',
  '-scarcity_indicator-pss_scarcity_1_left',
  '-scarcity_indicator-pss_scarcity_2_left',
  '-scarcity_indicator-pss_scarcity_3_left',
  '-scarcity_indicator-pss_scarcity_4_left',
  '-scarcity_indicator-pss_scarcity_5_left',
  'hp-rt-just-booked',
  'js--hp-rt-just-booked',
  'hprt-table-cheapest-block-banner-wrapper',
  'sr--justBooked'
]
  .map(x => `.${x}`)
  .join(', ')

Array.from(document.querySelectorAll(classNames)).forEach(node => node.remove())
