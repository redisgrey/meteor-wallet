import React from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";

export const SuccessAlerts = ({ message }) => {
    return (
        <div className="rounded-md mb-5 bg-red-50 p-4">
            <div className="flex">
                <div className="flex-shrink-0">
                    <CheckCircleIcon
                        className="h-5 w-5 text-green-400"
                        aria-hidden="true"
                    />
                </div>
                <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">
                        {message}
                    </h3>
                </div>
            </div>
        </div>
    );
};
