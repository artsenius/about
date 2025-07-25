import React from 'react';
import styled from 'styled-components';
import profilePhoto from '../media/art.jpg';
import resumePDF from '../media/A_Senko_Lead_SDET.pdf';
import { useTheme } from './ThemeProvider';

const AboutSection = styled.section`
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    transition: background-color 0.3s ease, color 0.3s ease;

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
    align-items: start;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ProfileSection = styled.div`
    text-align: center;
`;

const ProfileImage = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 15px rgba(52, 73, 94, 0.2);
        filter: brightness(1.05);
    }
`;

const Name = styled.h2`
    color: ${props => props.theme.colors.text};
    font-size: 1.8rem;
    margin-bottom: 1rem;
    transition: color 0.3s ease;

    @media (max-width: 768px) {
        font-size: 1.4rem;
    }
`;

const Position = styled.h3`
    color: ${props => props.theme.colors.textSecondary};
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    transition: color 0.3s ease;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const DocumentLink = styled.a`
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: ${props => props.theme.colors.accent};
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: all 0.3s ease;
    margin-bottom: 1rem;
    width: 200px;

    &:hover {
        background-color: #2980b9;
        transform: translateY(-2px);
    }
`;



const ExpandableInfoBox = styled.div<{ $isDark: boolean }>`
    position: relative;
    background: ${props => props.$isDark ? '#2c3e50' : '#f8f9fa'};
    border: 1px solid ${props => props.$isDark ? '#34495e' : '#e9ecef'};
    border-radius: 8px;
    padding: 0.75rem 1rem;
    margin-bottom: 2rem;
    font-size: 0.9rem;
    line-height: 1.5;
    color: ${props => props.$isDark ? '#ecf0f1' : '#495057'};
    transition: all 0.3s ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
        background: ${props => props.$isDark ? '#34495e' : '#e9ecef'};
        border-color: ${props => props.$isDark ? '#3498db' : '#007bff'};
    }
`;

const InfoIcon = styled.span`
    font-size: 1.1rem;
    opacity: 0.8;
`;

const InfoText = styled.span`
    font-weight: 500;
`;

const ExpandedContent = styled.div<{ $isDark: boolean }>`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${props => props.$isDark ? '#2c3e50' : '#f8f9fa'};
    border: 1px solid ${props => props.$isDark ? '#34495e' : '#e9ecef'};
    border-top: none;
    border-radius: 0 0 8px 8px;
    padding: 1rem;
    z-index: 10;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s ease;

    ${ExpandableInfoBox}:hover & {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
`;

const Bio = styled.div`
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        font-size: 1rem;
        line-height: 1.5;
    }
`;

const Section = styled.div`
    margin-bottom: 2rem;
`;

const SectionTitle = styled.h3<{ $isDark: boolean }>`
    color: ${props => props.$isDark ? props.theme.colors.text : '#2c3e50'};
    margin-bottom: 1rem;
    font-size: 1.4rem;
    transition: color 0.3s;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
`;

const SkillsFilterContainer = styled.div`
    margin-bottom: 1.5rem;
`;

const SearchInput = styled.input`
    width: 100%;
    padding: 0.75rem;
    border: 2px solid ${props => props.theme.colors.surface};
    border-radius: 8px;
    font-size: 1rem;
    background-color: ${props => props.theme.colors.surface};
    color: ${props => props.theme.colors.text};
    margin-bottom: 1rem;
    transition: all 0.3s ease;

    &:focus {
        outline: none;
        border-color: ${props => props.theme.colors.accent};
        box-shadow: 0 0 0 3px ${props => props.theme.colors.accent}33;
    }

    &::placeholder {
        color: ${props => props.theme.colors.textSecondary};
    }
`;

const FilterButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
`;

const FilterButton = styled.button<{ $isActive: boolean }>`
    padding: 0.5rem 1rem;
    border: 2px solid ${props => props.$isActive ? props.theme.colors.accent : props.theme.colors.surface};
    background-color: ${props => props.$isActive ? props.theme.colors.accent : props.theme.colors.surface};
    color: ${props => props.$isActive ? 'white' : props.theme.colors.text};
    border-radius: 20px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        border-color: ${props => props.theme.colors.accent};
        background-color: ${props => props.$isActive ? '#2980b9' : props.theme.colors.hover};
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px ${props => props.theme.colors.accent}33;
    }
`;

const SkillItem = styled.div<{ $isVisible: boolean }>`
    background-color: ${props => props.theme.colors.surface};
    padding: 0.75rem;
    border-radius: 4px;
    font-size: 0.9rem;
    text-align: center;
    box-shadow: 0 2px 4px ${props => props.theme.colors.shadow};
    transition: all 0.3s ease-in-out;
    border: 1px solid transparent;
    color: ${props => props.theme.colors.text};
    opacity: ${props => props.$isVisible ? 1 : 0};
    transform: ${props => props.$isVisible ? 'scale(1)' : 'scale(0.8)'};
    display: ${props => props.$isVisible ? 'block' : 'none'};

    @media (max-width: 768px) {
        font-size: 0.85rem;
        padding: 0.6rem;
    }

    &:hover {
        transform: translateY(-2px) ${props => props.$isVisible ? 'scale(1)' : 'scale(0.8)'};
        background-color: ${props => props.theme.colors.hover};
        border-color: ${props => props.theme.colors.accent};
        box-shadow: 0 4px 8px ${props => props.theme.colors.accent}33;
    }
`;

const ResultsCounter = styled.p`
    color: ${props => props.theme.colors.textSecondary};
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
`;

const ExperienceItem = styled.div`
    margin-bottom: 1.5rem;
`;

const CompanyName = styled.h4<{ $isDark: boolean }>`
    color: ${props => props.$isDark ? props.theme.colors.text : '#2c3e50'};
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    transition: color 0.3s;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const Duration = styled.p`
    color: #7f8c8d;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
        font-size: 0.85rem;
    }
`;

const CompanyLink = styled.a`
    color: #3498db;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color: #2980b9;
        text-decoration: underline;
    }
`;

interface AboutProps {
  isDark: boolean;
  setCurrentPage?: (page: 'about' | 'about-app' | 'automation' | 'contact') => void;
}

const About: React.FC<AboutProps> = ({ isDark, setCurrentPage }) => {
    const { theme } = useTheme();
    const [searchTerm, setSearchTerm] = React.useState('');
    const [activeFilter, setActiveFilter] = React.useState<string>('all');

    const skills = React.useMemo(() => ({
        automation: ['WebdriverIO', 'Cypress', 'Playwright', 'Selenium', 'Appium', 'Model Context Protocol', 'Artillery', 'KaneAI', 'SmartUI'],
        technologies: ['JavaScript/TypeScript', 'React', 'React Native', 'Express.js', 'MongoDB', 'RESTful APIs', 'GraphQL'],
        cloud: ['BrowserStack', 'LambdaTest', 'SauceLabs', 'AWS'],
        tools: ['Azure DevOps', 'GitHub Actions', 'Docker', 'Jenkins', 'Visual QA', 'Accessibility Testing'],
        ai: ['Cursor Agents', 'Playwright MCP'],
        methodologies: ['DevOps', 'Load Testing']
    }), []);

    const skillCategories = [
        { key: 'all', label: 'All Skills' },
        { key: 'automation', label: 'Test Automation' },
        { key: 'technologies', label: 'Technologies' },
        { key: 'cloud', label: 'Cloud & Testing' },
        { key: 'tools', label: 'DevOps Tools' },
        { key: 'ai', label: 'AI & Innovation' },
        { key: 'methodologies', label: 'Methodologies' }
    ];

    const getAllSkills = () => {
        return Object.entries(skills).flatMap(([category, skillList]) => 
            skillList.map(skill => ({ skill, category }))
        );
    };

    const filteredSkills = React.useMemo(() => {
        const allSkills = Object.entries(skills).flatMap(([category, skillList]) => 
            skillList.map(skill => ({ skill, category }))
        );
        
        return allSkills.filter(({ skill, category }) => {
            const matchesSearch = skill.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesFilter = activeFilter === 'all' || category === activeFilter;
            return matchesSearch && matchesFilter;
        });
    }, [searchTerm, activeFilter, skills]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter);
    };

    const clearFilters = () => {
        setSearchTerm('');
        setActiveFilter('all');
        // Announce filter clear to screen readers
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.style.position = 'absolute';
        announcement.style.left = '-10000px';
        announcement.textContent = 'Filters cleared. Showing all skills.';
        document.body.appendChild(announcement);
        setTimeout(() => document.body.removeChild(announcement), 1000);
    };

    return (
        <AboutSection data-testid="about-section">
            <Content data-testid="about-content">
                <ProfileSection data-testid="profile-section">
                    <ProfileImage data-testid="profile-image" src={profilePhoto} alt="Arthur Senko" />
                    <Name data-testid="profile-name">Arthur Senko</Name>
                    <Position data-testid="profile-position">Lead QA Engineer, SDET<br />AI Enthusiast</Position>
                    <DocumentLink
                        data-testid="resume-link"
                        href={resumePDF}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download Resume ↗
                    </DocumentLink>
                </ProfileSection>
                <div data-testid="about-details">
                    <ExpandableInfoBox data-testid="app-info-box" $isDark={isDark}>
                        <InfoIcon data-testid="app-info-icon">ℹ️</InfoIcon>
                        <InfoText data-testid="app-info-text">App Info</InfoText>
                        <ExpandedContent data-testid="app-info-expanded-content" $isDark={isDark}>
                            A modern React application built by me from scratch with TypeScript. Features a robust Express.js backend with MongoDB database, comprehensive Playwright E2E testing, and automated CI/CD deployment. See <button
                                data-testid="about-app-link"
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setCurrentPage?.('about-app');
                                }}
                                style={{ color: theme.colors.accent, textDecoration: 'underline', cursor: 'pointer', background: 'none', border: 'none', padding: 0, font: 'inherit' }}
                            >
                                About This App
                            </button> page to learn more.
                        </ExpandedContent>
                    </ExpandableInfoBox>

                    <Bio data-testid="about-bio">
                        <p>
                            A results-driven Lead QA Engineer, SDET, and Test Automation Architect with expertise in AI testing and modern automation.
                            Proven track record of building and leading high-performing QA teams, implementing
                            efficient testing processes, and driving quality improvements across organizations.
                            Experienced in building comprehensive testing solutions and continuous integration pipelines from the ground up,
                            from initial concept to production deployment. Specialized in architecting scalable automation frameworks
                            that deliver exceptional results for even the most complex enterprise projects.
                        </p>
                    </Bio>

                    <Section data-testid="current-role-section">
                        <SectionTitle data-testid="current-role-title" $isDark={isDark}>Current Role</SectionTitle>
                        <ExperienceItem data-testid="experience-item">
                            <CompanyName data-testid="company-name" $isDark={isDark}>
                                <span data-testid="position-title">Lead QA Engineer</span> @ <CompanyLink data-testid="allergan-link" href="https://www.allerganaesthetics.com/" target="_blank" rel="noopener noreferrer">Allergan Aesthetics</CompanyLink>, an <CompanyLink data-testid="abbvie-link" href="https://www.abbvie.com/" target="_blank" rel="noopener noreferrer">AbbVie Company</CompanyLink>
                            </CompanyName>
                            <Duration data-testid="role-duration">June 2022 – Present | Remote</Duration>
                            <ul data-testid="role-achievements">
                                <li>Helped to enable $20M+ in single-day gift card sales.</li>
                                <li>Introduced AI tools to improve testing processes and reduce test creation time by 80%.</li>
                                <li>Built automation frameworks from scratch and scaled cross-browser/device testing.</li>
                                <li>Established company-wide load and high availability testing strategy.</li>
                                <li>Launched Slack-integrated Cursor AI agents for to automate many routine tasks.</li>
                            </ul>
                        </ExperienceItem>
                    </Section>

                    <Section data-testid="skills-section">
                        <SectionTitle data-testid="skills-title" $isDark={isDark}>Technical Skills</SectionTitle>
                        
                        <SkillsFilterContainer data-testid="skills-filter-container">
                            <SearchInput
                                data-testid="skills-search"
                                type="text"
                                placeholder="Search skills... (e.g., React, JavaScript, Cypress)"
                                value={searchTerm}
                                onChange={handleSearchChange}
                                aria-label="Search technical skills"
                            />
                            
                            <FilterButtons data-testid="filter-buttons">
                                {skillCategories.map(({ key, label }) => (
                                    <FilterButton
                                        key={key}
                                        data-testid={`filter-${key}`}
                                        $isActive={activeFilter === key}
                                        onClick={() => handleFilterChange(key)}
                                        aria-label={`Filter by ${label}`}
                                    >
                                        {label}
                                    </FilterButton>
                                ))}
                                {(searchTerm || activeFilter !== 'all') && (
                                    <FilterButton
                                        data-testid="clear-filters"
                                        $isActive={false}
                                        onClick={clearFilters}
                                        aria-label="Clear all filters"
                                        style={{ marginLeft: '0.5rem', fontWeight: 'bold' }}
                                    >
                                        Clear ✕
                                    </FilterButton>
                                )}
                            </FilterButtons>
                            
                            <ResultsCounter 
                                data-testid="results-counter"
                                role="status"
                                aria-live="polite"
                                aria-atomic="true"
                            >
                                Showing {filteredSkills.length} of {getAllSkills().length} skills
                            </ResultsCounter>
                        </SkillsFilterContainer>

                        <SkillsGrid 
                            data-testid="skills-grid"
                            role="list"
                            aria-label={`Technical skills. ${filteredSkills.length} skills displayed.`}
                        >
                            {filteredSkills.map(({ skill }, index) => (
                                <SkillItem 
                                    data-testid={`skill-item-${index}`} 
                                    key={`${skill}-${index}`}
                                    $isVisible={true}
                                    role="listitem"
                                >
                                    {skill}
                                </SkillItem>
                            ))}
                        </SkillsGrid>
                        
                        {filteredSkills.length === 0 && (
                            <p data-testid="no-results" style={{ 
                                textAlign: 'center', 
                                color: theme.colors.textSecondary,
                                fontStyle: 'italic',
                                padding: '2rem'
                            }}>
                                No skills found matching your criteria. Try adjusting your search or filters.
                            </p>
                        )}
                    </Section>

                    <Section data-testid="achievements-section">
                        <SectionTitle data-testid="achievements-title" $isDark={isDark}>Notable Achievements</SectionTitle>
                        <ul data-testid="achievements-list">
                            <li>Built QA teams and processes from the ground up in startup and enterprise environments.</li>
                            <li>Played a key role on every project, demonstrating responsibility and commitment to success.</li>
                            <li>Successfully led QA initiatives directly contributing to millions in company revenue.</li>
                            <li>Pioneered the adoption of advanced automation tools and frameworks, driving innovation.</li>
                            <li>Co-founded a startup, helping people launch careers with a 95% graduate employment rate.</li>
                        </ul>
                    </Section>
                </div>
            </Content>
        </AboutSection>
    );
};

export default About;