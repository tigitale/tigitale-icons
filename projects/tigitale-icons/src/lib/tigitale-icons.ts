export const tigitaleIconsAirplay: TigitaleIcon = {
    name: 'airplay',
    data: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="24 / connection / airplay"> <path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M19.2857 19L17.8571 17H21V5H3V17H6.14286L4.71429 19H3C1.89543 19 1 18.1046 1 17V5C1 3.89543 1.89543 3 3 3H21C22.1046 3 23 3.89543 23 5V17C23 18.1046 22.1046 19 21 19H19.2857ZM12 11.2795L18.9432 21H5.05681L12 11.2795ZM15.0568 19H8.94319L12 14.7205L15.0568 19Z" fill="black"/> </g> </svg>'
};

export const tigitaleIconsAdvertisement: TigitaleIcon = {
    name: 'advertisement',
    data: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="24 / various / advertisement"> <path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M6 20V18H8V19C8 20.1046 8.89543 21 10 21H13C14.1046 21 15 20.1046 15 19V17H18V18C18 19.1046 18.8954 20 20 20H22C23.1046 20 24 19.1046 24 18V4C24 2.89543 23.1046 2 22 2H4H2C0.89543 2 0 2.89543 0 4V20C0 21.1046 0.89543 22 2 22H4C5.10457 22 6 21.1046 6 20ZM2 20V4H20H22V18H20V14H18V15H15V14H13V19H10V14H8V16H6V14H4V20H2ZM19 6V8H5V6H19ZM16 12V10H5V12H16Z" fill="black"/> </g> </svg> '
};

export const tigitaleIconsAlarm: TigitaleIcon = {
    name: 'alarm',
    data: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="24 / time / alarm"><path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M6.20706 2.70711L4.79285 1.29289L1.29285 4.79289L2.70706 6.20711L6.20706 2.70711ZM19.2071 1.29289L22.7071 4.79289L21.2928 6.20711L17.7928 2.70711L19.2071 1.29289ZM12 22C6.47711 22 1.99995 17.5228 1.99995 12C1.99995 6.47715 6.47711 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4182 20 20 16.4183 20 12C20 7.58172 16.4182 4 12 4C7.58168 4 3.99995 7.58172 3.99995 12C3.99995 16.4183 7.58168 20 12 20ZM17 11H13V6H11V13H17V11Z" fill="black"/></g></svg>'
};

export const tigitaleIconsAlarmChecked: TigitaleIcon = {
    name: 'alarm-checked',
    data: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="24 / time / alarm-checked"> <path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M4.79285 1.29289L6.20706 2.70711L2.70706 6.20711L1.29285 4.79289L4.79285 1.29289ZM22.7071 4.79289L19.2071 1.29289L17.7928 2.70711L21.2928 6.20711L22.7071 4.79289ZM12 22C6.47711 22 1.99995 17.5228 1.99995 12C1.99995 6.47715 6.47711 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4182 20 20 16.4183 20 12C20 7.58172 16.4182 4 12 4C7.58168 4 3.99995 7.58172 3.99995 12C3.99995 16.4183 7.58168 20 12 20ZM15.2928 8.29289L11 12.5858L8.70706 10.2929L7.29285 11.7071L11 15.4142L16.7071 9.70711L15.2928 8.29289Z" fill="black"/> </g> </svg>'
};

export const tigitaleIconsArrowsDiagonals: TigitaleIcon = {
    name: 'arrows-diagonals',
    data: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="24 / arrows / arrows-diagonals"> <path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M13.4142 12L19 17.5858V14H21V21H14V19H17.5858L12 13.4142L6.41421 19H10V21H3V14H5V17.5858L10.5858 12L5 6.41421V10H3V3H10V5H6.41421L12 10.5858L17.5858 5H14V3H21V10H19V6.41421L13.4142 12Z" fill="black"/> </g> </svg>'
};

// | ''

export type tigitaleIcon = 'airplay' |
    'advertisement' |
    'alarm' |
    'alarm-checked' |
    'arrows-diagonals';

export interface TigitaleIcon {
    name: tigitaleIcon;
    data: string;
}