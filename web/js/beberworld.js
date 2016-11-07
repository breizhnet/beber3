/*!
 *
 * Jquery Mapael - Dynamic maps jQuery plugin (based on raphael.js)
 * Requires jQuery and Mapael >=2.0.0
 *
 * Map of beberworld
 * 
 * @author beber.breizhnet.fr
 */


(function (factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('jquery'), require('mapael'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery', 'mapael'], factory);
    } else {
        // Browser globals
        factory(jQuery, jQuery.mapael);
    }
}(function ($, Mapael) {

    "use strict";
    
    $.extend(true, Mapael,
        {
            maps :  {
                beberworld : {
                    width: 960,
                    height : 500,
                    getCoords : function (lat, lon) {
                        // todo
                        return {"x" : lat, "y" : lon};
                    },
                    'elems': {
                        "ocean-artic-north" : "M125,84h731l0.5,81.25c0,0-13.5,7.54-22.17,6.54c-8.67-1-22.33-7.73-22.33-7.73 s-16-13.37-35.67-12.7c0.33,3-2.67,4.98-12,1.32c-9.33-3.67-11.67-5.67-21-4.34c-8-5.33-8-5.67-10-5.34 s-2,0.33-2,0.33s-5-1.33-8.33-1.33s-0.33,3.67-7,4s-9-2.33-11,0.33c-2,2.67-9.67,0.67-8.33-3 c1.33-3.67-0.67-4.67-4.67-5c-4-0.33-1,4.33-4.33,3.33c-3.33-1-9-0.33-9-0.33s2.67-3-3-3.33 c-5.67-0.33-0.33-4.33-6-8.67C664,125,656,127.67,654.33,126c-1.67-1.67-4-1.74-8.67,1.63 C641,131,635,127.33,631.33,129.67C627.67,132,622.33,134,619,134s0.33,5-6.67,5s-0.33,8-7,4.67 C598.67,140.33,600.67,143,600,144s-2-2.67-3-3s-0.67,3.33-1.67,4.33s-2,0.33-3-2.33s-6.33-3.33-8,1 c-1.67,4.33-4.67,4.67-2.33,7s4,9-1.67,4.67c-5.67-4.33-13-5.33-13-5.33s3.33,4.67-6,5.33 C552,156.33,542,164,543,158.33c1-5.67-5-3-4.67-1.67c0.33,1.33,5,5.33,2,6c-3,0.67-7.33,0.67-7.67,3 c-0.33,2.33-2.33,4.33-5.67,1c-3.33-3.33,3,7.51-0.67,5.09c-3.67-2.42-1.67-4.09-4.33-7.09s2.33-2,5-2 s10.67,0,2-6.33c-6-4.33-13.33-2.33-15.33-4.67c-2-2.33-6.67-2-15.67-0.67s-34,7.5-48,3.51 C437.5,154,425.33,142.67,423,140.33c-2.33-2.33,4.33-8,1.33-14.67s-3.33-8,1.67-12s12-9.67,1.67-9.33 c-10.33,0.33-12.67,0.33-11.33-2.67c1.33-3-20-8.71-26.67-5.36C383,99.67,363,103.67,356,103.33 c-7-0.33-8.67-1-22.33-2.67C320,99,291.33,103,277.33,110.67s-32,7.67-39,11.33S229,138.67,222,145.33 C215,152,210.67,156,196.67,153s-33.24-8.67-43.33-0.33c-10.1,8.33-11,18.33,1.67,16 c12.67-2.33-4.33,6.33-6.33,6.67c-2,0.33-23.17,0.25-23.17,0.25L125,84z",
                        "ocean-pacific-west" : "M125.563,175.33L143,175.5l5.67-0.17c0,0-3,2.67,1.33,3.67s-5,2-5,2s-2,2,9.33,2 c5,3.67,12.67,3,8.67,5.67c-4,2.67-11.57,7.67-15.67,8.33c-4.1,0.67,1.33,3,11.67-2.67 c10.33-5.67,14-12.33,14.33-13.67c0.33-1.33,2,5,5,2s3.33-4.33,3.33-4.33s0.33,1.33,4.67,2.33 c4.33,1,11,1.38,15.33,6.02c4.33,4.65,6.67,8.4,7.67,11.36s6,5.29,8,6.96s7.33,5.67,7.67,11s-5,9.67,0,16 s10,7,12.67,13.33c2.67,6.33,5.33,12.12,9.33,16.39s7.67,6.06,4.33,0c-3.33-6.06-7.07-10.73,1.3-2.39 C261,267.67,260,272,262.67,273c2.67,1,7.33,6.67,11.33,7s9.33,2,12.67,3.67c3.33,1.67,6.33,4,12.67,8 c6.33,4,13.33,1,13.67,5.33s-4,8.67-5.67,13.33c-1.67,4.67-0.67,11,2,15c2.67,4,8.33,14,12.67,16.33 c4.33,2.33,5.33,13,3.67,19c-1.67,6,0.33,19-5.67,22.33c0.67,6.33,3.33,7,2,11.33c-1.33,4.33-2.33,7.67-4.33,8 c-2,0.33-1.67,3.67-0.67,7.33c1,3.67,2,17.48,11,17.48c0,0-35.33-0.48-44.33,2.19c-9,2.67-19.67,5.62-38-2.19 S229,417.67,207,417.67s-30.33,6-51.33-1S125.5,403,125.5,403L125.56,175.33z",
                        "ocean-artic-south" : "M125,403.58c0,0,32.78,17.84,48.75,16.59s35.4-3.28,43.63-2.22 c13.83-0.06,25.6,9.92,37.58,12.5c0,0,12.7,4.61,33.18-2.27c16.33-1.03,39.18-1.03,39.18-1.03 s64.17-6.15,75.17-13.65s8-17.5,50.5-19.5s33.5,1,63.5-9s55,7.5,83,12.5s83,16.5,103,20.5 s22.75,7.5,59.25,3.5S851,404,856,399.5V446l-731-0.5V403.58z",
                        "ocean-pacific-east" : "M856.25,165.33c0,0-17.75,13.17-44.88-1.33L807,166v3c0,0-5.25-0.67-10.25-3s-7.88,2.58-6.54,5.62 c1.33,3.05-2.6,2.38-8.6,5.71c-6,3.33-10.64,0.33-15.97,5.33c-5.33,5-4.65,5.67-4.65,10.33s-3.66,5-6.99,8 s-9.33-1.67-6.66-7c2.67-5.33,4-6.73,9.34-11.03c5.33-4.3,2-11.34-3-7.49S744,182.28,735,182.97 c-9,0.7-14.67,4.03-17.67,7.36c-3,3.33-6.67,6-1.67,7.33c5,1.33,7.67-2.33,9,2c1.33,4.33,1.33,8,2.67,10 S725,209,724.33,211s-1.67,0.33,1,4c2.67,3.67,4,3.67,3.67,7s-5.67,5.33-6.67,5.33S725,227.67,723,232s-2,6.67-7,9 s-9.67,6.67-14,7.67s-13.67,1-16.33,4.67c-2.67,3.67,0,2.79-7,8.39S672,268,665.33,268.67 c-6.67,0.67-12.67,2.33-9.67,6.33s9.33,10.67,4,14c-5.33,3.33-17.33-5.67-16.33,0s6.67,9,7.33,12.33 c0.67,3.33,0.67,3.33,0.67,3.33S652,312.5,654,314.5s2,5.5,9,8s15.5,4.5,19.5,5s14,8.5,19,7.5s9-1,11.5,3s8.5-2,9-4.5 s0.5-1.82,6,5.84s14,11.16,14,20.16s1,20.93-4,22.47s-18,36.03-3.5,41.29c0,0,58.5,3.89,122-23.76 L856.25,165.33z",
                        "ocean-indien" : "M505.5,376c0,0,5.5-5,10-9.5s11-11,9.5-15s6-8,7.5-14.5s-2-8.5,0-17s5-9,11.5-16.25 S558.5,286.5,552.5,288s-16-1-2.5-7.5s21-15.55,20.5-18.77s7.5-4.27,12.5,0s9,3.27,12,13.77s1.5,21.26,7,18.13 s1.5-4.13,9-13.63s10-16,16-10s6,12,9,10.5s4,9.76,5,13.13s6.55,13.88,2.27,10.13s-7.27-7.75-3.77,0 S649,313.9,650,317.45c1,3.55,5.99,8.12,18.5,6.83c0,0,9.24,1.27,14,3.22s17.6,7.57,17.6,7.57 S695,339.5,692.5,339s-3.5,0-5.5,3s-2.5,6-7.5,7s-12-0.5-10.5,7s-3,17,4,20s10,3.5,16,0s18-5.5,21.5-1.5S721,386,726,386 s7.64,2.56,7.64,2.56s-12.15,26.45,0.86,34.7c0,0-11.78-0.72-18.39-2.23c-6.61-1.51-63.73-13.33-83.28-17.15 c-19.55-3.82-50.49-8.54-68.73-16.67c-17.59-6.7-35.72-5.84-51.04-1.05S505.5,376,505.5,376z",
                        "ocean-atlantique" : "M510.25,387.08c0,0-11.75,0.92-4.75-11.08c0,0-8.17,3.67-10.83,0 c-2.67-3.67-3.33-4.33-8-12.67C482,355,486.67,352,483.33,349c-3.33-3-5-12,0-17.33c5-5.33-3-12.67-7.33-17.33 c-4.33-4.67,2.67-12.33-3.33-13c-6-0.67-10.67-5.67-15.67-2.67S438.67,303,433.67,296s-11-21.67-6.67-29 s4.33-8.33,10.33-14.67s4.67-5.33,7.33-9.67c2.67-4.33,0.33-5.33-2.67-5.33s-4.33-13-1-14s7.67,1.67,12,0 c4.33-1.67,2.67-7.67-1.67-10c-4.33-2.33-5.67-6-4.33-6.67c1.33-0.67,0-4.33-3-4.33s-6-1-4.67-4.33 c1.33-3.33,4.33-8.33,7-11.33c2.67-3,6.67-5,7.67,0s11.34-9.04,13-11.19s2.66-0.48,8.66-5.48 s15.08-17.91,15.08-17.91s-42.42,12.57-67.75-11.76c0,0-3.33-0.33-6,5c-2.67,5.33-0.67,8.33-12,11 C393.67,159,395,163,391.33,164c-3.67,1-8.33,2.67-11.67,8.67c-3.33,6,1,12.67-5,9.33s-17-6-22.33,5.67 c-5.33,11.67-1.67,16,0,18.33c1.67,2.33,14,6.67,8,8.67s-11.33-3-14-0.67c-2.67,2.33,0.67,3.67-3.67,5.67 c-4.33,2-10,0-13,1.67c-3,1.67-2.33,4.67-6.33,7c-4,2.33-7,3-8.33,8.67s-5,7.33-7.33,10.33c-2.33,3,0.67,6,0,10.33 c-0.67,4.33-1.67,2.33-5-3c-3.33-5.33-11.67-3.67-12-2c-0.33,1.67-17-0.88-15.33,9.06 c1.67,9.94,3,15.27,13.33,9.61c10.33-5.67,9,3.67,7,5.67s2,3.67,5.33,8s6,9.26,10.33,8.63 c4.33-0.63,5.33-3.96,13.67-3.96s31.67,3.67,36.33,12.33C366,310.67,374,316.33,381,316s14.67,5.67,4.67,17.67 s2,19.67-18.67,23.33c1.67,15-4.67,13-7.33,17c0,0-4,7.33-9.67,11s-10,1-11.67,7c-1.67,6-2,9-4.33,13.33 c-2.33,4.33-3.05,15.74,3,17.92s11.31,1.54,11.31,1.54S401,424,408.82,407.82C426,393,450,395,475.64,393.19 C502,393,510.25,387.08,510.25,387.08z"
                    }
                }
            }
        }
    );

    return Mapael;

}));