export interface NumberFormatter {
  number: string;
}

export const convertNumberSm = ({ number }: NumberFormatter) => {
  let parsedNumber = parseFloat(number);

  if (isNaN(parsedNumber)) {
    parsedNumber = 0;
  }

  let data = new Intl.NumberFormat("id-ID").format(parsedNumber);
  if (data.split(",").length > 1) {
    if (data.split(",")[1].length < 3) {
      return (
        data.split(",")[0] + "," + (data.split(",")[1] + "000").slice(0, 3)
      );
    } else {
      return data;
    }
  } else {
    return data + ",000";
  }
};

export interface NumberFormatterNotFixed {
  number: string;
}

export const converNumberSmNotFixed = ({ number }: NumberFormatterNotFixed) => {
  let num = parseFloat(number);

  if (isNaN(num)) {
    num = 0;
  }

  return new Intl.NumberFormat("id-ID").format(num);
};
