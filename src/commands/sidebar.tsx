import React from 'react';

export const CommandSidebar = ({
  data,
}: {
  data: { [section: string]: { [command: string]: string } };
}): JSX.Element => (
  <div className="inset-0 hidden w-56 px-4 -mt-4 overflow-y-scroll z-1 lg:block lg:fixed command-sidebar">
    <div className="flex items-center">
      <nav id="nav" className="w-full mt-8 mb-8 text-base">
        {Object.keys(data).map((section, key) => (
          <div key={key} className="mb-4">
            <span className="block px-1 mb-1 text-xs font-bold tracking-wide text-gray-600 uppercase">
              {section}
            </span>
            {Object.keys(data[section])
              .filter(k => !k.startsWith('_'))
              .map((command, key) => (
                <a
                  href={`#${section}-${command}`}
                  key={key}
                  className="block w-full p-1 text-left mb-0.5 text-gray-700 transition-all duration-75 ease-linear rounded font-code"
                >
                  ${command}
                </a>
              ))}
          </div>
        ))}
      </nav>
    </div>
  </div>
);
