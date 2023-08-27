/*
 * Swagger Hospital map - OpenAPI 3.0
 * This is a hospital map API based on OpenAPI 3.0 specification
 *
 * OpenAPI spec version: 1.0.11
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.46
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {HospitalBusinessHours} from './HospitalBusinessHours';

/**
 * The Hospital model module.
 * @module model/Hospital
 * @version 1.0.11
 */
export class Hospital {
  /**
   * Constructs a new <code>Hospital</code>.
   * @alias module:model/Hospital
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Hospital</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Hospital} obj Optional instance to populate.
   * @return {module:model/Hospital} The populated <code>Hospital</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Hospital();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('longitude'))
        obj.longitude = ApiClient.convertToType(data['longitude'], 'Number');
      if (data.hasOwnProperty('latitude'))
        obj.latitude = ApiClient.convertToType(data['latitude'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('address'))
        obj.address = ApiClient.convertToType(data['address'], 'String');
      if (data.hasOwnProperty('supportedLanguages'))
        obj.supportedLanguages = ApiClient.convertToType(data['supportedLanguages'], ['String']);
      if (data.hasOwnProperty('examinationTypes'))
        obj.examinationTypes = ApiClient.convertToType(data['examinationTypes'], ['String']);
      if (data.hasOwnProperty('businessHours'))
        obj.businessHours = ApiClient.convertToType(data['businessHours'], [HospitalBusinessHours]);
      if (data.hasOwnProperty('postNumber'))
        obj.postNumber = ApiClient.convertToType(data['postNumber'], 'String');
      if (data.hasOwnProperty('telephone'))
        obj.telephone = ApiClient.convertToType(data['telephone'], 'String');
      if (data.hasOwnProperty('website'))
        obj.website = ApiClient.convertToType(data['website'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
Hospital.prototype.id = undefined;

/**
 * @member {Number} longitude
 */
Hospital.prototype.longitude = undefined;

/**
 * @member {Number} latitude
 */
Hospital.prototype.latitude = undefined;

/**
 * @member {String} name
 */
Hospital.prototype.name = undefined;

/**
 * @member {String} address
 */
Hospital.prototype.address = undefined;

/**
 * Allowed values for the <code>supportedLanguages</code> property.
 * @enum {String}
 * @readonly
 */
Hospital.SupportedLanguagesEnum = {
  /**
   * value: "en"
   * @const
   */
  en: "en",

  /**
   * value: "jp"
   * @const
   */
  jp: "jp",

  /**
   * value: "ch"
   * @const
   */
  ch: "ch",

  /**
   * value: "kr"
   * @const
   */
  kr: "kr",

  /**
   * value: "vi"
   * @const
   */
  vi: "vi",

  /**
   * value: "esp"
   * @const
   */
  esp: "esp",

  /**
   * value: "pt"
   * @const
   */
  pt: "pt",

  /**
   * value: "fr"
   * @const
   */
  fr: "fr",

  /**
   * value: "de"
   * @const
   */
  de: "de",

  /**
   * value: "mya"
   * @const
   */
  mya: "mya",

  /**
   * value: "ne"
   * @const
   */
  ne: "ne",

  /**
   * value: "translator"
   * @const
   */
  translator: "translator"
};
/**
 * @member {Array.<module:model/Hospital.SupportedLanguagesEnum>} supportedLanguages
 */
Hospital.prototype.supportedLanguages = undefined;

/**
 * @member {Array.<String>} examinationTypes
 */
Hospital.prototype.examinationTypes = undefined;

/**
 * @member {Array.<module:model/HospitalBusinessHours>} businessHours
 */
Hospital.prototype.businessHours = undefined;

/**
 * @member {String} postNumber
 */
Hospital.prototype.postNumber = undefined;

/**
 * @member {String} telephone
 */
Hospital.prototype.telephone = undefined;

/**
 * @member {String} website
 */
Hospital.prototype.website = undefined;

