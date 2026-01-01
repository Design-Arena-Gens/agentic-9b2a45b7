'use client';

import { useState } from 'react';

interface Props {
  projectData: any;
  setProjectData: (data: any) => void;
}

export default function ScriptGenerator({ projectData, setProjectData }: Props) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [script, setScript] = useState<any>(null);
  const [settings, setSettings] = useState({
    duration: '10',
    tone: 'dark-cinematic',
    language: 'english',
    pacing: 'medium',
  });

  const generateScript = async () => {
    if (!projectData.selectedTopic) {
      alert('Please select a topic from the Research tab first');
      return;
    }

    setIsGenerating(true);
    await new Promise(resolve => setTimeout(resolve, 3000));

    const mockScript = {
      title: projectData.selectedTopic.title,
      duration: `${settings.duration} minutes`,
      wordCount: 1850,
      sections: [
        {
          id: 1,
          title: 'Hook',
          duration: '0:00 - 0:30',
          content: `[DEEP VOICE - SLOW]\n\nImagine waking up one morning...\nAnd everyone you love... is gone.\n\nNo goodbye. No note. No trace.\n\n[PAUSE - 2 SECONDS]\n\nThis is the true story of the Henderson family.\n\nAnd how they vanished from Devil's Hollow...\nfifty years ago tonight.\n\n[MUSIC SWELL]`,
          notes: 'Dark opening with dramatic pause. Show empty house visuals.',
        },
        {
          id: 2,
          title: 'Background Setup',
          duration: '0:30 - 2:30',
          content: `[STEADY PACING]\n\nDevil's Hollow, Montana. Population: 842.\n\nA quiet mountain town where nothing ever happened...\nUntil October 23rd, 1974.\n\nThe Henderson family lived in a modest home on Maple Street.\n\nJohn Henderson, 42. A schoolteacher.\nMary Henderson, 38. A nurse at the local clinic.\nAnd their two children: Sarah, 15, and Michael, 10.\n\n[PAUSE]\n\nNeighbors described them as ordinary.\nFriendly. Unremarkable.\n\nBut on that October morning...\nthey became one of America's most disturbing mysteries.`,
          notes: 'Use old photographs, 1970s era footage, small town establishing shots.',
        },
        {
          id: 3,
          title: 'The Discovery',
          duration: '2:30 - 4:30',
          content: `[TENSION BUILDS]\n\nThe mailman noticed first.\n\nThree days of mail piling up.\nNewspapers on the driveway.\nThe front door... slightly ajar.\n\n[PAUSE]\n\nHe knocked. No answer.\n\nHe called the sheriff.\n\nWhat they found inside...\nwould haunt this town for decades.\n\n[DRAMATIC PAUSE]\n\nThe house was empty.\nCompletely empty.\n\nBut here's what makes this case truly terrifying:\n\nDinner was still on the table. Cold, but fresh enough that it had been cooked that morning.\n\nSarah's homework was spread across her desk. Half-finished.\n\nMichael's toy truck sat in the middle of the hallway.\n\nAnd in the master bedroom...\nthe closet doors were wide open.\n\nEvery piece of clothing still hanging.\nEvery suitcase still in place.\n\n[PAUSE - 3 SECONDS]\n\nThey didn't pack. They didn't leave.\n\nThey just... disappeared.`,
          notes: 'Crime scene recreation. Show empty rooms, plates on table, open doors.',
        },
        {
          id: 4,
          title: 'The Investigation',
          duration: '4:30 - 7:00',
          content: `[INVESTIGATIVE TONE]\n\nThe FBI arrived within 48 hours.\n\nThey searched for weeks.\nInterviewed 300 people.\nAnalyzed every detail.\n\n[PAUSE]\n\nThere were no signs of struggle.\nNo blood. No fingerprints.\nNo ransom note.\n\nThe family car was in the garage.\nTheir bank accounts... untouched.\n\nBut investigators found something strange.\n\n[TENSION INCREASE]\n\nIn the basement, behind the furnace,\nthey discovered a small locked door.\n\nWhen they opened it...\nthey found a narrow tunnel.\n\nIt stretched 200 feet underground...\nand ended at an old abandoned mine shaft.\n\n[PAUSE]\n\nThe mine had been closed since 1952.\nOfficially sealed.\n\nBut someone had reopened it.\n\nAnd according to forensic analysis...\nthe tunnel was dug from the inside out.\n\nStarting from the mine...\nleading to the Henderson house.`,
          notes: 'Show FBI archives, investigation footage, tunnel diagrams, dark mine imagery.',
        },
        {
          id: 5,
          title: 'Theories',
          duration: '7:00 - 9:00',
          content: `[THOUGHTFUL, MYSTERIOUS]\n\nOver the years, theories emerged.\n\nSome believed the family was running from something.\nA debt. A threat. A secret life.\n\nOthers thought they were taken.\nBy whom? Nobody knows.\n\nLocal legends speak of Devil's Hollow differently.\n\nThey say the mine wasn't closed because it ran out of ore.\n\nIt was closed because miners kept disappearing.\n\n17 men vanished between 1948 and 1952.\n\nAll without a trace.\n\n[PAUSE]\n\nThe Henderson case was never solved.\n\nNo bodies were ever found.\nNo suspects arrested.\n\nBut here's what keeps investigators awake at night:\n\n[FINAL REVELATION]\n\nIn 2019, a hiker found something near the old mine entrance.\n\nA child's shoe.\nSize matched Michael Henderson's.\n\nForensic testing confirmed: it's his.\n\nBut the shoe showed no signs of aging.\n\nNo decay. No weathering.\n\nAs if it was placed there... yesterday.`,
          notes: 'Show theories timeline, news clippings, the discovered shoe evidence.',
        },
        {
          id: 6,
          title: 'Closing',
          duration: '9:00 - 10:00',
          content: `[SLOW, HAUNTING CONCLUSION]\n\nFifty years later,\nDevil's Hollow remains quiet.\n\nThe Henderson house still stands.\nEmpty. Abandoned.\n\nNo one has lived there since 1974.\n\n[PAUSE]\n\nSometimes, late at night,\nresidents claim to see lights in the windows.\n\nThe sound of children playing.\n\nBut when investigators arrive...\nthe house is dark.\n\nSilent.\n\n[FINAL PAUSE]\n\nWhat happened to the Henderson family?\n\nWhere did they go?\n\nAnd why did someone... or something...\ndig a tunnel to their home?\n\n[MUSIC FADES]\n\nSome mysteries aren't meant to be solved.\n\nThey're meant to be remembered.`,
          notes: 'End with haunting visuals of the abandoned house, fade to black.',
        },
      ],
      metadata: {
        hooks: 3,
        cliffhangers: 5,
        avgReadingSpeed: '150 WPM',
        estimatedDuration: '10:15',
        retentionScore: 9.1,
      },
    };

    setScript(mockScript);
    setProjectData({ ...projectData, script: mockScript });
    setIsGenerating(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-red-900/20 to-gray-900/20 border border-red-800/30 rounded-xl p-6">
        <h2 className="text-3xl font-bold text-white mb-2">Cinematic Script Generator</h2>
        <p className="text-gray-400">
          AI-powered suspense-driven scriptwriting with perfect pacing and retention hooks
        </p>
      </div>

      {!projectData.selectedTopic ? (
        <div className="bg-yellow-900/20 border border-yellow-800/30 rounded-xl p-6">
          <p className="text-yellow-400">⚠️ Please select a topic from the Research tab first</p>
        </div>
      ) : (
        <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-2">Selected Topic</h3>
          <p className="text-gray-300">{projectData.selectedTopic.title}</p>
        </div>
      )}

      <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Script Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Duration (minutes)</label>
            <select
              value={settings.duration}
              onChange={(e) => setSettings({ ...settings, duration: e.target.value })}
              className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-red-600"
            >
              <option value="8">8 minutes</option>
              <option value="10">10 minutes</option>
              <option value="12">12 minutes</option>
              <option value="15">15 minutes</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Tone</label>
            <select
              value={settings.tone}
              onChange={(e) => setSettings({ ...settings, tone: e.target.value })}
              className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-red-600"
            >
              <option value="dark-cinematic">Dark Cinematic</option>
              <option value="investigative">Investigative</option>
              <option value="suspenseful">Suspenseful</option>
              <option value="documentary">Documentary</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Language</label>
            <select
              value={settings.language}
              onChange={(e) => setSettings({ ...settings, language: e.target.value })}
              className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-red-600"
            >
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="hinglish">Hinglish</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Pacing</label>
            <select
              value={settings.pacing}
              onChange={(e) => setSettings({ ...settings, pacing: e.target.value })}
              className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-red-600"
            >
              <option value="slow">Slow (Atmospheric)</option>
              <option value="medium">Medium (Balanced)</option>
              <option value="fast">Fast (High Energy)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={generateScript}
          disabled={isGenerating || !projectData.selectedTopic}
          className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 disabled:from-gray-700 disabled:to-gray-800 text-white font-semibold rounded-xl shadow-lg shadow-red-900/30 transition-all duration-200 disabled:cursor-not-allowed"
        >
          {isGenerating ? '✍️ Generating Script...' : '📝 Generate Cinematic Script'}
        </button>
      </div>

      {script && (
        <div className="space-y-6">
          <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-white">{script.title}</h3>
              <div className="flex space-x-4 text-sm">
                <span className="text-gray-400">Duration: <span className="text-white">{script.duration}</span></span>
                <span className="text-gray-400">Words: <span className="text-white">{script.wordCount}</span></span>
                <span className="text-gray-400">Retention: <span className="text-green-400">{script.metadata.retentionScore}/10</span></span>
              </div>
            </div>
          </div>

          {script.sections.map((section: any) => (
            <div key={section.id} className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">{section.title}</h4>
                  <p className="text-sm text-gray-400">{section.duration}</p>
                </div>
                <button className="px-4 py-2 bg-red-900/20 hover:bg-red-900/30 border border-red-800/30 text-red-400 rounded-lg text-sm transition-colors">
                  Edit Section
                </button>
              </div>

              <div className="bg-black/50 border border-gray-700 rounded-lg p-4 mb-4">
                <pre className="text-gray-300 whitespace-pre-wrap font-mono text-sm leading-relaxed">
                  {section.content}
                </pre>
              </div>

              <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-3">
                <p className="text-sm text-blue-400">📋 Production Notes: {section.notes}</p>
              </div>
            </div>
          ))}

          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors">
              📥 Export Script
            </button>
            <button className="px-6 py-3 bg-green-700 hover:bg-green-600 text-white rounded-lg transition-colors">
              🎬 Proceed to Production
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
