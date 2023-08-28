import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationPin} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faSquarePhoneFlip} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();
    return (
        <div className="w-screen relative bottom-0 right-0 left-0 bg-[#133c8b] lg:flex lg:justify-center">
            <div className="py-[15px] lg:w-4/5 w-full lg:flex ">
                <img alt="..." className="mb-1 lg:mb-0 pl-6 lg:pl-0" src="https://2022.vnix-nog.vn/sites/default/files/vnnic-logo.png"/>
                <div className="lg:flex justify-between pl-6">
                    <div className="">
                        <p className="uppercase text-white font-bold pb-4">{t('department')}</p>
                        <p className="uppercase text-white font-bold">{t('name')}</p>
                    </div>
                    <div className="lg:px-10 ">
                        <div className="flex justify-start items-center pb-4">
                            <FontAwesomeIcon className="text-white lg:px-6 pr-4"
                                icon={faLocationPin}></FontAwesomeIcon>
                            <p className=" text-white ">18 Nguyễn Du,Hà Nội</p>
                        </div>
                        <div className="flex justify-start items-center pb-4 lg:pb-0">
                            <FontAwesomeIcon className="text-white lg:px-6 pr-4"
                                icon={faEnvelope}></FontAwesomeIcon>
                            <p className=" text-white ">info@vnnic.vn</p>
                        </div>
                    </div>
                    <div className="lg:px-10">
                        <div className="flex justify-start items-center pb-4">
                            <FontAwesomeIcon className="text-white lg:px-6 pr-4"
                                icon={faPhone}></FontAwesomeIcon>
                            <p className=" text-white ">+84-24-35564944</p>
                        </div>

                        <div className="flex justify-start items-center ">
                            <FontAwesomeIcon className="text-white lg:px-6 pr-4"
                                icon={faSquarePhoneFlip}></FontAwesomeIcon>
                            <p className=" text-white ">+84-24-37821462</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
