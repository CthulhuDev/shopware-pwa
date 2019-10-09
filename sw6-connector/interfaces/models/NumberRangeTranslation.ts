import { iCustomField } from "./Common";
import { NumberRange } from "./system/number-range/NumberRange";
export interface NumberRangeTranslation {
    numberRangeId: string;
    name: string | null;
    description: string | null;
    numberRange: NumberRange | null;
    customFields: iCustomField | null;
}
