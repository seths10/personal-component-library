/**
 * Converts date to human readable
 * @param {string} dateString
 * @returns {string} Human Readable date format
 */

function convertDateToHumanReadable(dateString?: string): string {
  if (!dateString) return "";
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options as any);
}

/**
 * Converts all phone numbers to international format
 * @param {string} countryCode
 * @param {string} phoneNumber
 * @returns {string} converted format
 */
function convertPhoneToInternationalFormat(
  countryCode: string,
  phoneNumber: string
): string {
  const convertedFormat = `${countryCode}${
    Number(phoneNumber?.charAt(0)) === 0
      ? `${phoneNumber?.slice(1, phoneNumber?.length)}`
      : `${phoneNumber}`
  }`;
  return convertedFormat;
}

/**
 * Generate v4 UUID
 * @param radix  The number base scale. Most UUIDs use base 16
 * @returns a string
 */
function generateUUID(radix: number = 16) {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let rnd = (Math.random() * radix) | 0,
      v = c === "x" ? rnd : (rnd & 0x3) | 0x8;
    return v.toString(radix);
  });
}

/**
 * Convert date to ISOString
 * @param {string}  date
 * @returns {string} ISOSString Formart
 */

function convertDateToISOString(date?: string): string {
  if (!date) return "";
  return new Date(date).toISOString().substring(0, 10);
}

export const convertISODate = (date: string) => {
  const [year, month, day] = date.split("-");
  return `${day}-${month}-${year}`;
};

export const convertDateToISO = (date: string) => {
  const [day, month, year] = date.split("-");
  return `${year}-${month}-${day}`;
};

export const capitalizeFirstWord = (sentence?: string) => {
  if (!sentence) return;
  return sentence.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
  );
};

export const getFirstTwoNames = (fullName: string): string => {
  const names = fullName.trim().split(" ");
  if (names.length <= 2) {
    return fullName;
  }
  return `${names[0]} ${names[1]}`;
};

export {
  convertDateToISOString,
  convertDateToHumanReadable,
  generateUUID,
  convertPhoneToInternationalFormat,
};

export const checkGhanaPostGPSCode = (gpsCode: string): boolean => {
  const gpsCodeRegex = /^[A-Z]{2}-[0-9]{3}-[0-9]{4}$/;
  return gpsCodeRegex.test(gpsCode);
};

export const getISOCodeFromFlag = (flagUrl?: string): string => {
  if (!flagUrl) {
    return "";
  }
  const ISOcode = flagUrl.substring(20, 22).toUpperCase();
  return ISOcode;
};
