import React, { useState } from 'react'
import { useSiteSettings } from '../../Context/SiteSettingsContext';

const SiteSettings = () => {
  const { coverEnabled, setCoverEnabled } = useSiteSettings();

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-700 dark:text-white">Site Settings</h2>
      
      <div className="flex items-center justify-between border-b dark:border-gray-700 pb-4">
        <div>
          <p className="font-medium text-gray-700 dark:text-white">Page Cover</p>
          <p className="text-sm text-gray-400">Category page এ cover image দেখাবে</p>
        </div>
        <input
          type="checkbox"
          className="toggle  bg-black/80 hover:bg-black/90 text-white p-1"
          checked={coverEnabled}
          onChange={() => setCoverEnabled(!coverEnabled)}
        />
      </div>
    </div>
  )
}

export default SiteSettings