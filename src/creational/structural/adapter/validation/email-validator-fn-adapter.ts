import isEmail from 'validator/lib/isEmail';
import { EmailValidatorProtocol } from './email-validator-protocol';

export const emailValidatorFnAdapter: EmailValidatorProtocol = (
    value: string,
): boolean => {
    return isEmail(value);
};
