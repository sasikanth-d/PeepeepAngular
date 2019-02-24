"use strict";
// THIS FILE IS AUTOMATICALLY GENERATED. TO UPDATE THIS FILE YOU NEED TO CHANGE THE
// CORRESPONDING JSON SCHEMA FILE, THEN RUN devkit-admin build (or bazel build ...).
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Specifies the change detection strategy.
 */
var ChangeDetection;
(function (ChangeDetection) {
    ChangeDetection["Default"] = "Default";
    ChangeDetection["OnPush"] = "OnPush";
})(ChangeDetection = exports.ChangeDetection || (exports.ChangeDetection = {}));
/**
 * Specifies the view encapsulation strategy.
 */
var ViewEncapsulation;
(function (ViewEncapsulation) {
    ViewEncapsulation["Emulated"] = "Emulated";
    ViewEncapsulation["Native"] = "Native";
    ViewEncapsulation["None"] = "None";
    ViewEncapsulation["ShadowDOM"] = "ShadowDom";
})(ViewEncapsulation = exports.ViewEncapsulation || (exports.ViewEncapsulation = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJkaXN0LXNjaGVtYS9wYWNrYWdlcy9zY2hlbWF0aWNzL2FuZ3VsYXIvY29tcG9uZW50L3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsbUZBQW1GO0FBQ25GLG9GQUFvRjs7QUE0RXBGOztHQUVHO0FBQ0gsSUFBWSxlQUdYO0FBSEQsV0FBWSxlQUFlO0lBQ3ZCLHNDQUFtQixDQUFBO0lBQ25CLG9DQUFpQixDQUFBO0FBQ3JCLENBQUMsRUFIVyxlQUFlLEdBQWYsdUJBQWUsS0FBZix1QkFBZSxRQUcxQjtBQUVEOztHQUVHO0FBQ0gsSUFBWSxpQkFLWDtBQUxELFdBQVksaUJBQWlCO0lBQ3pCLDBDQUFxQixDQUFBO0lBQ3JCLHNDQUFpQixDQUFBO0lBQ2pCLGtDQUFhLENBQUE7SUFDYiw0Q0FBdUIsQ0FBQTtBQUMzQixDQUFDLEVBTFcsaUJBQWlCLEdBQWpCLHlCQUFpQixLQUFqQix5QkFBaUIsUUFLNUIiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIFRISVMgRklMRSBJUyBBVVRPTUFUSUNBTExZIEdFTkVSQVRFRC4gVE8gVVBEQVRFIFRISVMgRklMRSBZT1UgTkVFRCBUTyBDSEFOR0UgVEhFXG4vLyBDT1JSRVNQT05ESU5HIEpTT04gU0NIRU1BIEZJTEUsIFRIRU4gUlVOIGRldmtpdC1hZG1pbiBidWlsZCAob3IgYmF6ZWwgYnVpbGQgLi4uKS5cblxuLy8gdHNsaW50OmRpc2FibGU6bm8tZ2xvYmFsLXRzbGludC1kaXNhYmxlXG4vLyB0c2xpbnQ6ZGlzYWJsZVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjaGVtYSB7XG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIHRoZSBjaGFuZ2UgZGV0ZWN0aW9uIHN0cmF0ZWd5LlxuICAgICAqL1xuICAgIGNoYW5nZURldGVjdGlvbj86IENoYW5nZURldGVjdGlvbjtcbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgaWYgdGhlIGNvbXBvbmVudCBpcyBhbiBlbnRyeSBjb21wb25lbnQgb2YgZGVjbGFyaW5nIG1vZHVsZS5cbiAgICAgKi9cbiAgICBlbnRyeUNvbXBvbmVudD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIGlmIGRlY2xhcmluZyBtb2R1bGUgZXhwb3J0cyB0aGUgY29tcG9uZW50LlxuICAgICAqL1xuICAgIGV4cG9ydD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogRmxhZyB0byBpbmRpY2F0ZSBpZiBhIGRpcmVjdG9yeSBpcyBjcmVhdGVkLlxuICAgICAqL1xuICAgIGZsYXQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyBpZiB0aGUgc3R5bGUgd2lsbCBiZSBpbiB0aGUgdHMgZmlsZS5cbiAgICAgKi9cbiAgICBpbmxpbmVTdHlsZT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIGlmIHRoZSB0ZW1wbGF0ZSB3aWxsIGJlIGluIHRoZSB0cyBmaWxlLlxuICAgICAqL1xuICAgIGlubGluZVRlbXBsYXRlPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0byBhcHBseSBsaW50IGZpeGVzIGFmdGVyIGdlbmVyYXRpbmcgdGhlIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBsaW50Rml4PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBBbGxvd3Mgc3BlY2lmaWNhdGlvbiBvZiB0aGUgZGVjbGFyaW5nIG1vZHVsZS5cbiAgICAgKi9cbiAgICBtb2R1bGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHBhdGggdG8gY3JlYXRlIHRoZSBjb21wb25lbnQuXG4gICAgICovXG4gICAgcGF0aD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgcHJlZml4IHRvIGFwcGx5IHRvIGdlbmVyYXRlZCBzZWxlY3RvcnMuXG4gICAgICovXG4gICAgcHJlZml4Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0LlxuICAgICAqL1xuICAgIHByb2plY3Q/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdG9yIHRvIHVzZSBmb3IgdGhlIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBzZWxlY3Rvcj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBGbGFnIHRvIHNraXAgdGhlIG1vZHVsZSBpbXBvcnQuXG4gICAgICovXG4gICAgc2tpcEltcG9ydD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIGlmIGEgc3BlYyBmaWxlIGlzIGdlbmVyYXRlZC5cbiAgICAgKi9cbiAgICBzcGVjPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgZmlsZSBleHRlbnNpb24gdG8gYmUgdXNlZCBmb3Igc3R5bGUgZmlsZXMuXG4gICAgICovXG4gICAgc3R5bGVleHQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIHRoZSB2aWV3IGVuY2Fwc3VsYXRpb24gc3RyYXRlZ3kuXG4gICAgICovXG4gICAgdmlld0VuY2Fwc3VsYXRpb24/OiBWaWV3RW5jYXBzdWxhdGlvbjtcbn1cblxuLyoqXG4gKiBTcGVjaWZpZXMgdGhlIGNoYW5nZSBkZXRlY3Rpb24gc3RyYXRlZ3kuXG4gKi9cbmV4cG9ydCBlbnVtIENoYW5nZURldGVjdGlvbiB7XG4gICAgRGVmYXVsdCA9IFwiRGVmYXVsdFwiLFxuICAgIE9uUHVzaCA9IFwiT25QdXNoXCIsXG59XG5cbi8qKlxuICogU3BlY2lmaWVzIHRoZSB2aWV3IGVuY2Fwc3VsYXRpb24gc3RyYXRlZ3kuXG4gKi9cbmV4cG9ydCBlbnVtIFZpZXdFbmNhcHN1bGF0aW9uIHtcbiAgICBFbXVsYXRlZCA9IFwiRW11bGF0ZWRcIixcbiAgICBOYXRpdmUgPSBcIk5hdGl2ZVwiLFxuICAgIE5vbmUgPSBcIk5vbmVcIixcbiAgICBTaGFkb3dET00gPSBcIlNoYWRvd0RvbVwiLFxufVxuIl19